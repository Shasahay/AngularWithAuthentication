import { Injectable, OnInit } from '@angular/core';
import {Http, Request,RequestMethod, Response, RequestOptions, Headers, ResponseType, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/operator/map'
import 'rxjs/add/operator/mergeMap'
import { Observable } from 'rxjs';

@Injectable()

export class ApiHelper implements OnInit{
    private serviceUrl : string =  'http://localhost/EntitledApi/EntitleOData';  // get the config file;
    antiForgeryToken: string = undefined;
    userName: string //= 'ssahay@teamdrg.com';
    apiKey:string  // = '19DFD5E7-79F5-419F-87AE-D3555D1FED3B';
        constructor(private http : Http) {
            //this.getToken();  // later when imp authentication it'll use
        }
        //Not sure why ngonint is not getting call
        ngOnInit(){
            //this.getToken(); // comment : since api is not running
        }
        getToken(){
             var url = this.serviceUrl + "/Token";
             window.location.href = url;
            //  this.get(url).subscribe(data => {
            //     if(data !==null && data !== undefined){
            //         this.antiForgeryToken = data.value
            //         console.log(this.antiForgeryToken);
            //     }
            //  });
        }

        get(url: string){
                return this.request(url, RequestMethod.Get);
        }

        post(url : string, body : object) {
            return this.request(url, RequestMethod.Post, body)
        }

        put(url : string, body : object) {
            return this.request(url, RequestMethod.Put, body)
        }

        delete(url : string, body : object) {
            return this.request(url, RequestMethod.Delete, body)
        }

        getHeader(){
            var headers = new Headers();
            headers['Authorization'] ='Basic ' + btoa(this.userName + ':' + this.apiKey);
            //headers.append('X-Antiforgery-Token', this.antiForgeryToken);
            headers.append("Access-Control-Allow-Origin", "*");
            //headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            
            if (this.antiForgeryToken !== undefined) {
                headers.append('X-Antiforgery-Token', this.antiForgeryToken);
            }
            return headers;
        }

        request(url: string, method: RequestMethod, inputData?: object){
                var header = this.getHeader();
                var requestOptions = new RequestOptions({
                    url : url,
                    method : method,
                    headers : header
                    //responseType : ResponseContentType.Json
                });

                if(inputData){
                    requestOptions.body = inputData;
                }
                
                const request = new Request(requestOptions);

                        // return this.http.request(request).flatMap((res:Response) => {
                        //     var location = res.headers.get('Location');
                        //     if(location != null)
                        //     return window.location.href =location;
                        // })
                        return this.http.request(request)
                        .map((res: Response) => res.json())
                        .catch((res: Response) => this.onRequestError(res));

             }
 
        onRequestError(res : Response){
            const statusCode = res.status;
            if(statusCode == 401){

            }
            const body = res.json();
                const error = {
                    statusCode : statusCode,
                    error : body
                }
                return Observable.throw(error)
        }

        setValue(key : string, value: string){
            localStorage.setItem(key, value);
        }
        GetValue(key: string){
           return localStorage.getItem(key);
        }
}