import { Component, OnInit } from '@angular/core';
import { UserToGroupAllColumns } from '../Models/usertogroupallcolumns.model';
import { GroupService } from '../Services/group.service';
import { Globlas } from '../globals';

@Component({
    selector : '',
    templateUrl:'./manage-stdentitlement.component.html',
    providers:[GroupService]
})

export class ManageStandardEntitlement implements OnInit{
    userToGroupAllColumns : UserToGroupAllColumns[]
    userName : string = "ssahay@teamdrg.com"
    constructor(private _groupService : GroupService, private _globals : Globlas){
        this.userToGroupAllColumns = _groupService.getUserGroups(this.userName);
    }

    ngOnInit(){
        if(this._globals.userToGroupAllColumns !== null && this._globals.userToGroupAllColumns !== undefined){
            this.userToGroupAllColumns = this._globals.userToGroupAllColumns;
        }
        else{
            this._groupService.eventCallback$.subscribe(vlu =>{
                this.userToGroupAllColumns = vlu;
            })
        }
    }
}