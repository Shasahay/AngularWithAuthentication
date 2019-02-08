import { UserComponent } from './user.component';
import { Observable, observable } from 'rxjs';
import { User } from './../Models/user';
import { UserService } from './../Services/user.services';
import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import  'rxjs/operators';
import { MatDialog } from '../../../node_modules/@angular/material';
import { Globlas } from '../globals';

@Component ({
    selector : '',
    templateUrl : './manage-testuser.component.html',
    providers:[UserService]
})

export class ManageTestUserComponent implements OnInit{
    //@Input() data : any;
    Users : User[];
    testUsers : User[];
    userId : number = 75642;
    isCreateNewUserLoad : boolean = false;
    isUserPopupOpened = false;
    constructor(private userService: UserService,private _globals : Globlas, private dialog? : MatDialog){
        //this.userService.userId = this.userId;
        this.Users = this.userService.getDevPortalUsers(this.userId)
    }

    ngOnInit(){
        if(this._globals.Users !== null && this._globals.Users !== undefined){
            this.Users = this._globals.Users;
            this.testUsers = this.getTestUser(this.Users)    
        }
        else{
            this.userService.eventCallback$.subscribe(vlu =>{
                this.Users = vlu;
                this.testUsers = this.getTestUser(this.Users)    
            })
        }
        
    }
    getTestUser(users :User[]): User[]{
        var testUser : User[] = new Array();
        users.forEach(element => {
            if(element.IsTest){
                testUser.push(element);
            }
        });
        return testUser;
    }

    addUser(){
        if(!this.isUserPopupOpened){
            this.isUserPopupOpened = true;
            const dialogRef = this.dialog.open(UserComponent, {
              data: {}
            });
           
            dialogRef.afterClosed().subscribe(result => {
                this.isUserPopupOpened = false;
              });
        }
        else{
        }   
    }

    editUser(id: number) {
        if(!this.isUserPopupOpened){
            this.isUserPopupOpened = true;
            const usr = this.testUsers.find(c => c.Id === id);
            const dialogRef = this.dialog.open(UserComponent, {
              data: usr
            });
            dialogRef.afterClosed().subscribe(result => {
              this.isUserPopupOpened = false;
            });
        }
        else{

        }
       
      }

      deleteUser(id: number) {
          if(confirm("Are you sure ?")){
            //this.userService.deleteContact(id);
          }
        
      }
}