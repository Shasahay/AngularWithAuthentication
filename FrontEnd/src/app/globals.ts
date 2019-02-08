import { Injectable } from '@angular/core';
import { User } from './Models/user';
import { UserToGroupAllColumns } from './Models/usertogroupallcolumns.model';
import { CustomEntitlement } from './Models/custom-entitlement.model';

@Injectable()
export class Globlas{
 Users : User[]
 userEntitlementsOnUserLavel : CustomEntitlement[]
 userToGroupAllColumns : UserToGroupAllColumns[];
 Token : string;
}
