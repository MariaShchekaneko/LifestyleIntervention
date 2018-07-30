import { Entry } from 'ionic-native';
import { FileError } from 'ionic-native';
import { Camera } from 'ionic-native';
import { Weight } from './../../models/weight';
import { NgForm } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { WeightService } from './../../services/weight.service';
import { Component } from '@angular/core';
import { File } from "ionic-native";

declare var cordova: any;

@Component({
  selector: 'page-add-weight',
  templateUrl: 'add-weight.html',
})
export class AddWeightPage {

  weight: Weight;


    constructor(
      private weightService: WeightService,
      private toastCtrl: ToastController) {
  }
    onSubmit(form: NgForm) {
      this.weightService.addWeight(form.value.date,
                                   form.value.weight);
     form.resetForm();
     const toast = this.toastCtrl.create({
      message: 'Weight was added!',
      duration: 2500,
      position: 'middle'
    });
    toast.present();
    }


  }
