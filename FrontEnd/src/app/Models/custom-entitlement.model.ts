import { Application } from './application.model';
export interface CustomEntitlement {
    Id : number,
    Field1 : string,
    Field2 : string,
    Field3 : string,
    Field4 : string,
    Field5 : string,
    StartDate : string,
    EndDate : string,
    Active : boolean,
    Application : Application
}