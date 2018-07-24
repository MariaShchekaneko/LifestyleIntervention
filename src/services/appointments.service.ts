
import { Appointment } from './../models/appointment';
import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";
import { Location } from "../models/location";

@Injectable()
export class AppointmentsService {
    private appointments: Appointment[] = [];

    constructor(private storage: Storage) {}

    addAppointment(date: Date,
                   time: string,
                   doctor: string,
                   notes: string,
                   location: Location) {
        const appointment = new Appointment(date, time, doctor, notes, location);
        this.appointments.push(appointment);
        this.storage.set('appointments', this.appointments)
        .then()
        .catch(
          err => {
            this.appointments.splice(this.appointments.indexOf(appointment), 1);
          }
        );
        }

loadAppointments() {
return this.appointments.slice();
}

fetchAppointments() {
return this.storage.get('appointments')
 .then(
   (appointments: Appointment[]) => {
     this.appointments = appointments != null ? appointments : [];
     return this.appointments;
   }
 )
 .catch(
   err => console.log(err)
 );
}

deleteAppointment(index: number) {
  this.appointments.splice(index, 1);
  this.storage.set('appointments', this.appointments)
}
}