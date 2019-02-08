import { Application } from './../Models/application.model';
import { EntitlementService } from './../Services/entitlement.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import {CustomEntitlement} from '../Models/custom-entitlement.model'

@Component({
    selector:'',
    templateUrl: './entitlement.component.html'
})

export class EntitlementComponent implements OnInit{
    transitionEntitltment:FormGroup;
    constructor(private _formBuilder : FormBuilder, private _dialogRef : MatDialogRef<EntitlementComponent>, @Inject(MAT_DIALOG_DATA) public customEntitlement: CustomEntitlement, private _entService : EntitlementService){
    
    }

    ngOnInit(){
        this.transitionEntitltment = this._formBuilder.group({
            ApplicationName : [this.customEntitlement.Application.Name,[Validators.required]],
            Field1 : [this.customEntitlement.Field1,[Validators.required]],
            Field2 : [this.customEntitlement.Field1,[Validators.required]],
            Field3 : [this.customEntitlement.Field1,[Validators.required]]
        })
    }

    onNoClick(): void{
        this._dialogRef.close();
    }

    onSubmit(){
        if(isNaN(this.customEntitlement.Id)){
            // new Record
        }
        else{
            //update record
        }
        this._dialogRef.close();
    }
}

    
