import { Globlas } from './../globals';
import { promise } from 'protractor';
import { User } from './../Models/user';
import { Injectable, OnInit } from '@angular/core';
import {Http, Request,RequestMethod, Response, RequestOptions, Headers, ResponseType, ResponseContentType} from '@angular/http';
import { ApiHelper } from './api-helper.service';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/operator/map'
import { Observable, Subject} from 'rxjs';
import 'rxjs/operators';
@Injectable()
export class UserService{
    //self = this;
    userId : number;
    public users : User[];
    private eventCallback : Subject<any[]> = new Subject<any[]>();
    private _displayMessage: string = "Waiting for service to complete";
    serviceUrl : string = 'http://localhost/EntitledApi/EntitleOData/'
    eventCallback$ = this.eventCallback.asObservable();
    constructor(private http : Http, private apiHelper : ApiHelper, private _globals : Globlas){
        //this.getDevPortalUsers(this.userId);  // you can either call from constructor
    }
    //directly from the component
    public getDevPortalUsers(id:number): User[]{

        // If else is not need here but each compoment use this service.
        // if(this._globals.Users !== null && this._globals.Users !== undefined){
        //     return this._globals.Users;
        // }
        // else{
            this.users = this.getDevPortalUsersfromApi(id);   
            return this.users;
        //}
        
    }

    public saveUser(user : User){
        console.log(user);
        //this.saveUserFromApi(user)
    }

    private getDevPortalUsersfromApi(id: number):any[]{
        var getUserUrl  = this.serviceUrl + 'GetDevPortalUsers(id='+id+')';
        this.apiHelper.get(getUserUrl).subscribe(res =>{
        if(res !== null && res !== undefined){
            this.eventCallback.next(res.value);
            this._globals.Users = res.value;  // Assign this value to gloabal variable
            return res.value;
        }
        });
        return null;
    }


    private saveUserFromApi(user: User) :boolean{
        return true;
    }


}
