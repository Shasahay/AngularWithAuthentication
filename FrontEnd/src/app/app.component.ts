import { Globlas } from './globals';
import { ApiHelper } from './Services/api-helper.service';
import { ManageTestUserComponent } from './ManageTestUsers/manage-testuser.component';
import { ManageEntitlementComponent } from './ManageEntitlements/manage-entitlement.component';
import { HomeComponent } from './Home/home.component';
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  user = 'Developer';  // later add with the loged-in user
  title = 'welcome to the Dev Portal' ;
  
  //@ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  // constructor(private resolver : ComponentFactoryResolver, private apiHelper : ApiHelper){

  // }

  constructor(private _apiHelper : ApiHelper, private _global : Globlas){
    
  }

  ngOnInit(){
    let un = this._apiHelper.GetValue("un");
    if( un!= null || un != undefined){
      this.user = un;
    }
    // not calling since end url is not live
    //if(this._apiHelper.GetValue("token") == null || this._apiHelper.GetValue("token") == undefined)
    //this._apiHelper.getToken(); 
  }

  ngAfterViewInit() {
    // this.vc.clear();
    // let factory = this.resolver.resolveComponentFactory(HomeComponent);
    // this.vc.createComponent(factory);
  }

//   childStatusChanged(step: string) {
//     var factory;
//   if (step){
//     if(step == 'Manage Entitlements')
//       //return ManageEntitleComponent;
//       factory = this.resolver.resolveComponentFactory(ManageEntitlementComponent);
//       else if(step == 'Manage My Test User')
//       //return ManageTestUserComponent;
//       factory = this.resolver.resolveComponentFactory(ManageTestUserComponent);
//       else
//       //return HomeComponent;
//       factory = this.resolver.resolveComponentFactory(HomeComponent);
//       this.vc.clear();
//       this.vc.createComponent(factory);
//   }
//  }
}
