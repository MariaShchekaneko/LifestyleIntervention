import { BloodPressureService } from './../../services/bloodPressure.service';
import { BloodPressure } from './../../models/bloodPressure';
import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-blood-pressure',
  templateUrl: 'blood-pressure.html',
})
export class BloodPressurePage {

  pressure: BloodPressure;
  index: number;

  constructor(public navParams: NavParams,
    private viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private bloodPressureService: BloodPressureService) {
    this.pressure = this.navParams.get('pressure');
    this.index = this.navParams.get('index');
  }
  onLeave() {
    this.viewCtrl.dismiss();
  }

  onDelete() {
      const alert = this.alertCtrl.create ({
      title: 'Remove',
      message: 'Are you sure you want to remove this log?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.bloodPressureService.deletePressure(this.index);
            this.onLeave();
            console.log('Ok');
          }
        },
        {
          text: 'No, I changed my mind',
          handler: () => {
            console.log('Canceled');
          }
        }
      ]
    });
    alert.present();
  }

}