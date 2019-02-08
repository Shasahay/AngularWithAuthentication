import {Component, Output, EventEmitter, OnInit} from '@angular/core'
import { isNgTemplate } from '@angular/compiler';

@Component({
    selector:'menu',
    templateUrl : './menu.Component.html'
})
export class MenuComponent implements OnInit{
    selectedItem : any = {};
    menuItems: any[] = [
                        {"name":'Home', "routerLink": '/home'},
                        {"name":'Manage My Test User', "routerLink": '/manageusers'},
                        {"name":'Manage Entitlements',"routerLink": '/manageentitlements'},
                        {"name":'API Calls'},
                        {"name":'Manage My Applications'},
                        {"name":'Link'},
                        {"name":'Help'}
                        ];

    @Output() onMenuChange = new EventEmitter<string>();

    ngOnInit(){
        this.selectedItem = this.menuItems[0];
    }

    menuClick = function(itm){
        this.selectedItem = itm;
      this.onMenuChange.emit(itm.name);
    }
}
