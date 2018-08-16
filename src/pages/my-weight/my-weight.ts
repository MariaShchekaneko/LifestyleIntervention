import { WeightPage } from './../weight/weight';
import { WeightService } from './../../services/weight.service';
import { Weight } from './../../models/weight';
import { AddWeightPage } from './../add-weight/add-weight';
import { ModalController, NavController, NavParams} from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'page-my-weight',
  templateUrl: 'my-weight.html',
})

export class MyWeightPage {
  //@ViewChild('barChart') barChart;
  addWeightPage = AddWeightPage;
  weights: Weight[] = [];
  weights_bk: Weight;



  constructor( public modalCtrl:      ModalController,
               public navCtrl      :  NavController,
               public navParams    :  NavParams,
               private weightService: WeightService)
  {
   this.weights = this.navParams.get('weight');
    this.weights_bk = this.navParams.get('weight');
   }

ngOnInit() {
  this.weightService.fetchWeights()
    .then(
      (weights: Weight[]) => this.weights = weights
    );
}
ionViewWillEnter(){

  this.weights = this.weightService.loadWeights();
}

onOpenWeight(weight: Weight, index: number) {
  const modal = this.modalCtrl.create(WeightPage, {weight: weight, index: index});
  modal.present();
  modal.onDidDismiss(
    () => {
      this.weights = this.weightService.loadWeights();
    }
  );
}
}
