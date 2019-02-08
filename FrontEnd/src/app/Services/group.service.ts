import { UserToGroupAllColumns } from './../Models/usertogroupallcolumns.model';
import { Http } from '@angular/http';
import { ApiHelper } from './api-helper.service';
import { Globlas } from '../globals';
import { Injectable } from '../../../node_modules/@angular/core';
import { Subject } from '../../../node_modules/rxjs';

@Injectable()
export class GroupService{
    serviceUrl : string = 'http://localhost/EntitledApi/EntitleOData/'
    userId : number;
    userName : string;
    userToGroupAllColumns : UserToGroupAllColumns[];
    private eventCallback : Subject<any[]> = new Subject<any[]>();
    eventCallback$ = this.eventCallback.asObservable();
    constructor(private _http:Http, private _apiHelper : ApiHelper, private _globals : Globlas){

    }

    public getUserGroups(userName : string): UserToGroupAllColumns[]{
        this.userToGroupAllColumns = this.getUserGroupsFromApi(userName)
        return this.userToGroupAllColumns;
    }

    private getUserGroupsFromApi(userName : string): any[]{
        var getUserUrl  = this.serviceUrl + 'GetGroupByUserName(userName='+"'"+userName+"'"+')';
        this._apiHelper.get(getUserUrl).subscribe(res =>{
        if(res !== null && res !== undefined){
            this.eventCallback.next(res.value);
            this._globals.userToGroupAllColumns = res.value;  // Assign this value to gloabal variable
            return res.value;
        }
        });
        return null;
    }

}