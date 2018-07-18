import { MealPage } from './../meal/meal';
import { MealsService } from './../../services/meals.service';
import { Meal } from './../../models/meal';
import { ModalController } from 'ionic-angular';
import { AddMealPage } from './../add-meal/add-meal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-my-meals',
  templateUrl: 'my-meals.html',
})
export class MyMealsPage implements OnInit {
  addMealPage = AddMealPage;
  meals: Meal[] = [];
  constructor(public modalCtrl: ModalController,
              private mealsService: MealsService){}

  ngOnInit() {
    this.mealsService.fetchMeals()
      .then(
        (meals: Meal[]) => this.meals = meals
      );
  }
  ionViewWillEnter(){
    this.meals = this.mealsService.loadMeals();
  }
  onOpenMeal(meal: Meal, index: number) {
    const modal = this.modalCtrl.create(MealPage, {meal: meal, index: index});
    modal.present();
    modal.onDidDismiss(
      () => {
        this.meals = this.mealsService.loadMeals();
      }
    );
  }
}