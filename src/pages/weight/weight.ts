import { WeightService } from './../../services/weight.service';
import { Weight } from './../../models/weight';
import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-weight',
  templateUrl: 'weight.html',
})
export class WeightPage {

  weight: Weight;
  index: number;

  constructor(public navParams: NavParams,
    private viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private weightService: WeightService) {
    this.weight = this.navParams.get('weight');
    this.index = this.navParams.get('index');
  }
  onLeave() {
    this.viewCtrl.dismiss();
  }

  onDelete() {
      const alert = this.alertCtrl.create ({
      title: 'Slett',
      message: 'Er du sikker?',
      buttons: [
        {
          text: 'Ja',
          handler: () => {
            this.weightService.deleteWeight(this.index);
            this.onLeave();
            console.log('Ok');
          }
        },
        {
          text: 'Nei',
          handler: () => {
            console.log('Canceled');
          }
        }
      ]
    });
    alert.present();
  }

}
