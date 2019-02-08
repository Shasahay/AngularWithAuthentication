import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { read } from 'fs';
import { HomeDevPortalAccessComponent } from './home-devportalaccess.component';
import { HomeTestUsersComponent } from './home-testusers.component';
import { HomeEntitlementsComponent } from './home-entitlements.component';
import { HomeApiCallComponent } from './home-apicalls.component';
import { HomeApplicationsComponent } from './home-applications.component';

@Component({
selector : '',
templateUrl : './home.component.html'
})

export class HomeComponent{
 homeMenuItems : any[] = [
                            {'name': 'DevPortal Access', 'componentName':HomeDevPortalAccessComponent},
                            {'name': 'Test Users', 'componentName':HomeTestUsersComponent},
                            {'name': 'Entitlements', 'componentName':HomeEntitlementsComponent},
                            {'name': 'API Calls', 'componentName':HomeApiCallComponent},
                            {'name': 'Applications', 'componentName':HomeApplicationsComponent},
                        ];
 selectedItem : any = {};

 @ViewChild('homeChildComponent', {read : ViewContainerRef}) homeChildComponent : ViewContainerRef
 constructor(private resolver : ComponentFactoryResolver){

 }

ngAfterViewInit(){
    this.selectedItem = this.homeMenuItems[0];
    this.renderComponent(this.selectedItem.componentName)
}

 onSubMenuClick(item : any){
    if(item){
        this.selectedItem = item;
        this.renderComponent(this.selectedItem.componentName)
    }
 }

 private renderComponent(componentName : any){
    this.homeChildComponent.clear();
    let factory = this.resolver.resolveComponentFactory(componentName);
    this.homeChildComponent.createComponent(factory);
 }

}