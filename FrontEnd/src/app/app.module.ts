import { EntitlementComponent } from './ManageEntitlements/entitlement.component';
import { ManageCustomEntitlement } from './ManageEntitlements/manage-custentitlement.component';
import { EntitlementService } from './Services/entitlement.service';
import { ManageStandardEntitlement } from './ManageEntitlements/manage-stdentitlement.component';
import { ViewEntitlements } from './ManageEntitlements/view-entitlement.component';
import { Globlas } from './globals';
import { UserService } from './Services/user.services';
import { ApiHelper } from './Services/api-helper.service';
import { SEService } from './Services/standard-entitlement.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { ManageTestUserComponent } from './ManageTestUsers/manage-testuser.component';
import { ManageEntitlementComponent } from './ManageEntitlements/manage-entitlement.component';
import { HomeComponent } from './Home/home.component';
import { MenuComponent } from './Menu/menu.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './ManageTestUsers/user.component';
import { AppRoutingModule,routingComponents } from './/app-routing.module';
import { HomeDevPortalAccessComponent } from './Home/home-devportalaccess.component';
import { HomeTestUsersComponent } from './Home/home-testusers.component';
import { HomeEntitlementsComponent } from './Home/home-entitlements.component';
import { HomeApiCallComponent } from './Home/home-apicalls.component';
import { HomeApplicationsComponent } from './Home/home-applications.component';
import { GroupService } from  './Services/group.service'
import { ConsumeComponent } from './Consume/consume.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent, 
    MenuComponent,
    HomeComponent,
    ManageEntitlementComponent,
    ManageTestUserComponent,
    UserComponent,
    routingComponents,
    ViewEntitlements,
    ManageStandardEntitlement,
    HomeDevPortalAccessComponent,
    HomeTestUsersComponent,
    HomeEntitlementsComponent,
    HomeApiCallComponent,
    HomeApplicationsComponent,
    ManageCustomEntitlement,
    EntitlementComponent,
    ConsumeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,HttpModule,
    // ,NgbModule,NgbModule.forRoot()
    //MDBBootstrapModule.forRoot()
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ApiHelper,UserService,SEService,GroupService, EntitlementService, Globlas],
  bootstrap: [AppComponent],
  entryComponents:[
    ManageEntitlementComponent,
    ManageTestUserComponent,
    HomeComponent,
    UserComponent,
    ViewEntitlements,
    ManageStandardEntitlement,
    HomeDevPortalAccessComponent,
    HomeTestUsersComponent,
    HomeEntitlementsComponent,
    HomeApiCallComponent,
    HomeApplicationsComponent,
    ManageStandardEntitlement,
    ManageCustomEntitlement,
    EntitlementComponent
  ]
})
export class AppModule { }
