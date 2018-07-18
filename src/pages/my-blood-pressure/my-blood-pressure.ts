import { BloodPressurePage } from './../blood-pressure/blood-pressure';
import { BloodPressureService } from './../../services/bloodPressure.service';
import { BloodPressure } from './../../models/bloodPressure';
import { AddBloodPressurePage } from './../add-blood-pressure/add-blood-pressure';
import { ModalController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-my-blood-pressure',
  templateUrl: 'my-blood-pressure.html',
})
export class MyBloodPressurePage implements OnInit {
  addBloodPressurePage = AddBloodPressurePage;
  pressure: BloodPressure[] = [];
  constructor(public modalCtrl: ModalController,
              private bloodPressureService: BloodPressureService){}

  ngOnInit() {
    this.bloodPressureService.fetchPressure()
      .then(
        (pressure: BloodPressure[]) => this.pressure = pressure
      );
  }
  ionViewWillEnter(){
    this.pressure = this.bloodPressureService.loadPressure();
  }
  onOpenPressure(pressure: BloodPressure, index: number) {
    const modal = this.modalCtrl.create(BloodPressurePage, {pressure: pressure, index: index});
    modal.present();
    modal.onDidDismiss(
      () => {
        this.pressure = this.bloodPressureService.loadPressure()
      }
    );
  }
}

