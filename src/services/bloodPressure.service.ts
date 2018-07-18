import { BloodPressure } from './../models/bloodPressure';
import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";

@Injectable()
export class BloodPressureService {
    private pressure: BloodPressure[] = [];

    constructor(private storage: Storage) {}

    addPressure(date: Date,
              systolic: number,
              diastolic: number) {
        const my_pressure = new BloodPressure(date, systolic, diastolic);
        this.pressure.push(my_pressure);
        this.storage.set('pressure', this.pressure)
        .then()
        .catch(
          err => {
            this.pressure.splice(this.pressure.indexOf(my_pressure), 1);
          }
        );
    }
    loadPressure(){
        return this.pressure.slice();
    }
    fetchPressure() {
        return this.storage.get('pressure')
          .then(
            (pressure: BloodPressure[]) => {
              this.pressure = pressure != null ? pressure : [];
              return this.pressure;
            }
          )
          .catch(
            err => console.log(err)
          );
      }

      deletePressure(index: number) {
         this.pressure.splice(index, 1);
         this.storage.set('pressure', this.pressure)
       }

}