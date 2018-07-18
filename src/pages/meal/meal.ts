import { MealsService } from './../../services/meals.service';
import { Meal } from './../../models/meal';
import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-meal',
  templateUrl: 'meal.html',
})
export class MealPage {

  meal: Meal;
  index: number;

  constructor(public navParams: NavParams,
    private viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private mealsService: MealsService) {
    this.meal = this.navParams.get('meal');
    this.index = this.navParams.get('index');
  }
  onLeave() {
    this.viewCtrl.dismiss();
  }

  onDelete() {
      const alert = this.alertCtrl.create ({
      title: 'Remove Meal',
      message: 'Are you sure you want to remove this meal?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.mealsService.deleteMeal(this.index);
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