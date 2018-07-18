import { Location } from "./location";

export class Appointment {
    constructor( public date: Date, 
                 public time: string,
                 public doctor: string,
                 public notes: string,
                 public location: Location){}
}