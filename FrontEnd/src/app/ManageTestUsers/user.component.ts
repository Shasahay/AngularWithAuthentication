import { UserService } from './../Services/user.services';
import { User } from './../Models/user';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector:'',
    templateUrl:'./user.component.html' 
})

export class UserComponent implements OnInit {
    public transitionUser : FormGroup;
    constructor(private _formBuilder : FormBuilder, private _dialogRef : MatDialogRef<UserComponent>, @Inject(MAT_DIALOG_DATA) public user: User, private _userService : UserService){

    }

    ngOnInit(){
        this.transitionUser = this._formBuilder.group({
            UserName : [this.user.UserName, [Validators.required]],
            FirstName : [this.user.FirstName, [Validators.required]],
            LastName : [this.user.LastName, [Validators.required]],
            Email : [this.user.Email, [Validators.required]],
        })
    }

    onNoClick() : void{
        this._dialogRef.close();
    }

    onSubmit(){
        if(isNaN(this.user.Id)){  // new user
            this._userService.saveUser(this.transitionUser.value);
        }
        else{  // Edit user
            this._userService.saveUser(this.transitionUser.value);
        }
        this._dialogRef.close();
    }
}