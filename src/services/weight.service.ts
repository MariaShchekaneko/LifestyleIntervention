import { Weight } from './../models/weight';
import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";
import { File } from "ionic-native";

declare var cordova: any;

@Injectable()
export class WeightService {
    private weights: Weight[] = [];

    constructor(private storage: Storage) {}

    addWeight(date: Date,
            weight: number) {
        const my_weight = new Weight(date, weight);
        this.weights.push(my_weight);
        this.storage.set('weights', this.weights)
        .then()
        .catch(
          err => {
            this.weights.splice(this.weights.indexOf(my_weight), 1);
          }
        );
    }
    loadWeights(){
        return this.weights.slice();
    }
    fetchWeights() {
        return this.storage.get('weights')
          .then(
            (weights: Weight[]) => {
              this.weights = weights != null ? weights : [];
              return this.weights;
            }
          )
          .catch(
            err => console.log(err)
          );
      }

      deleteWeight(index: number) {
        const weight = this.weights[index];
        this.weights.splice(index, 1);
        this.storage.set('weights', this.weights)
          .then(
            () => {
              this.removeFile(weight);
            }
          )
          .catch(
            err => console.log(err)
          );
      }

      private removeFile(weight: Weight) {
        File.removeFile(cordova.file.dataDirectory, currentName)
          .then(
            () => console.log('Removed File')
          )
          .catch(
            () => {
              console.log('Error while removing File');
              this.addWeight(weight.date, weight.weight);
            }
          );
      }



}
