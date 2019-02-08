import { CustomEntitlement } from './../Models/custom-entitlement.model';
import { ApiHelper } from './api-helper.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Globlas } from '../globals';
import { Subject } from '../../../node_modules/rxjs';
@Injectable()
export class EntitlementService{
    serviceUrl : string = 'http://localhost/EntitledApi/EntitleOData/'
    customEntitlements : CustomEntitlement[]
    private _eventCallBack : Subject<any[]> = new Subject<any[]>();
    eventCallBack = this._eventCallBack.asObservable();
    constructor(private _http: Http, private _apiHelper: ApiHelper, private _globals : Globlas){

    }
    
    public getUserEntitlementonUserlavel(userName : string){
        this.customEntitlements = this.GetEntitlementOnUserlabelFromApi(userName)
        return this.customEntitlements;
    }

    private GetEntitlementOnUserlabelFromApi(userName:string){
        var getUserUrl  = this.serviceUrl + 'GetEntitlementOnUserlabel(userName='+"'"+userName+"'"+')';
        this._apiHelper.get(getUserUrl).subscribe(res =>{
            if(res !== null && res !== undefined){
                this._eventCallBack.next(res.value);
                this._globals.userEntitlementsOnUserLavel = res.value;  // Assign this value to gloabal variable
                return res.value;
            }
            });
            return null;
    }
}