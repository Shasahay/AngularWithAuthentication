
import { CustomEntitlement } from './../Models/custom-entitlement.model';
import { Component, OnInit } from '@angular/core';
import { EntitlementService } from '../Services/entitlement.service';
import { Globlas } from '../globals';
import { MatDialog } from '../../../node_modules/@angular/material';
import { EntitlementComponent } from './entitlement.component';


@Component({
    selector : '',
    templateUrl : './manage-custentitlement.component.html'
})

export class ManageCustomEntitlement implements OnInit {
    private _userName : string = "ssahay@teamdrg.com"
    customElements : CustomEntitlement[];
    isEntitlePopupOpen : boolean = false;
    constructor(private _entService : EntitlementService, private _globals : Globlas, private _dialog? : MatDialog){
        this.customElements = _entService.getUserEntitlementonUserlavel(this._userName);
    }

    ngOnInit(){
        if(this._globals.userEntitlementsOnUserLavel !== null && this._globals.userEntitlementsOnUserLavel !== undefined){
            this.customElements = this._globals.userEntitlementsOnUserLavel;
        }
        else{
            this._entService.eventCallBack.subscribe(vlu =>{
                this.customElements = vlu;
            })
        }
    }
    addEntitlement(){
        if(!this.isEntitlePopupOpen){
            this.isEntitlePopupOpen = true;
            const dialogRef = this._dialog.open(EntitlementComponent, {
              data: {}
            });
           
            dialogRef.afterClosed().subscribe(result => {
                this.isEntitlePopupOpen = false;
              });
        }
        else{
        }   
    }

    editEntitlement(id : number){
        if(!this.isEntitlePopupOpen){
            this.isEntitlePopupOpen = true;
            const entitlement = this.customElements.find(x=> x.Id === id)
            const dialogRef = this._dialog.open(EntitlementComponent,{
                    data:entitlement
            });
            dialogRef.afterClosed().subscribe(result => {
                this.isEntitlePopupOpen = false;
            })
        }
        else{

        }
    }

    deleteEntitlement(id : number){
        if(confirm("Are you sure ?")){
            //this._entService.delete(id);
        }
    }
}