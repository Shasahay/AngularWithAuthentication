import { ApiHelper } from './../Services/api-helper.service';
import { Globlas } from './../globals';
import {Component,OnInit} from '@angular/core'
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
    selector:'',
    templateUrl:'./consume.component.html'
})

export class ConsumeComponent implements OnInit{
    /**
     *
     */
    constructor(private route: ActivatedRoute, private _global : Globlas, private _apiHelper : ApiHelper) {
        var v =10;
    }

    ngOnInit(){
        let un = this.route.snapshot.queryParams["un"];
        this._global.Token = this.route.snapshot.queryParams["tok"];
        this._apiHelper.setValue("token",this._global.Token);
        this._apiHelper.setValue("un",un);
    }
}