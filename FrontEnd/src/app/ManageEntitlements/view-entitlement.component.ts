import { Component, OnInit } from '@angular/core';
import { GroupService } from '../Services/group.service';
import { Globlas } from '../globals';
import { UserToGroupAllColumns } from '../Models/usertogroupallcolumns.model';

@Component({
    selector:'',
    templateUrl:'./view-entitlement.component.html',
    providers:[GroupService]
})

export class ViewEntitlements implements OnInit {
    
    userToGroupAllColumns : UserToGroupAllColumns[]
    userName : string = "ssahay@teamdrg.com"
    constructor(private _groupService : GroupService, private _globals : Globlas){
        //this.userToGroupAllColumns = _groupService.getUserGroups(this.userName);
    }

    ngOnInit(){
        // debugger
        // if(this._globals.userToGroupAllColumns !== null && this._globals.userToGroupAllColumns !== undefined){
        //     this.userToGroupAllColumns = this._globals.userToGroupAllColumns;
        // }
        // else{
        //     this._groupService.eventCallback$.subscribe(vlu =>{
        //         this.userToGroupAllColumns = vlu;
        //     })
        // }

    }

}