import { HomeComponent } from './Home/home.component';
import { ManageEntitlementComponent } from './ManageEntitlements/manage-entitlement.component';
import { ManageTestUserComponent } from './ManageTestUsers/manage-testuser.component';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import { ConsumeComponent } from './Consume/consume.component';

const routes : Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component : HomeComponent},
  { path:'manageusers', component : ManageTestUserComponent},
  { path:'manageentitlements', component: ManageEntitlementComponent},
  { path:'consume', component: ConsumeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ManageTestUserComponent, ManageEntitlementComponent, HomeComponent]
