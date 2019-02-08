import { ManageCustomEntitlement } from './manage-custentitlement.component';
import { ManageStandardEntitlement } from './manage-stdentitlement.component';
import { UserService } from './../Services/user.services';
import { Component, Input, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { User } from './../Models/user';
import { Globlas } from '../globals';
import {ViewEntitlements} from './view-entitlement.component'

@Component({
 selector : '',
 templateUrl : './manage-entitlement.component.html',
 providers:[UserService]
})

export class ManageEntitlementComponent implements OnInit{
        Users : User[];
        userId : number = 75642;
        selectedItem : any = {"name" : 'View All Entitlements'};
        entitlementMenuItems : any[] = [  {"name" : 'View All Entitlements','componentName':ViewEntitlements},
                                            {"name" : 'Manage Statndard Entitlements', 'componentName': ManageStandardEntitlement},
                                            {"name" : 'Manage Custom Entitlements', 'componentName':ManageCustomEntitlement},
                                          ]
        @ViewChild('vc', {read: ViewContainerRef}) vc : ViewContainerRef
    constructor(private resolver: ComponentFactoryResolver , private userService: UserService, private _globals : Globlas){
        this.Users = this.userService.getDevPortalUsers(this.userId)
    }
    ngOnInit(){
        if(this._globals.Users !== null && this._globals.Users !== undefined){
            this.Users = this._globals.Users;
        }
        else{
            this.userService.eventCallback$.subscribe(vlu =>{
                this.Users = vlu;
            })
        }        
    }

    ngAfterViewInit() {
        this.selectedItem = this.entitlementMenuItems[0];
        this.renderComponent(this.selectedItem.componentName)
        
      }

    menuClick(item : string): void{
        
    }

    childStatusChanged(step: any) {
        if(step){
            this.selectedItem = step;
            this.renderComponent(this.selectedItem.componentName)
        }
    }

    private renderComponent(componentName : any){
        this.vc.clear();
        let factory = this.resolver.resolveComponentFactory(componentName);
        this.vc.createComponent(factory);
     }

}