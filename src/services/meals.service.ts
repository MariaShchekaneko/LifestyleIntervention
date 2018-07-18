//import { Ingredients } from './../models/ingredients';
import { Meal } from './../models/meal';
import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";
import { File } from "ionic-native";


declare var cordova: any;

@Injectable()
export class MealsService {
    private meals: Meal[] = [];

    constructor(private storage: Storage) {}

    addMeal(dishName: string,
            recipe: string, 
            imageUrl: string) {
        const meal = new Meal(dishName, recipe, imageUrl);
        this.meals.push(meal);
        this.storage.set('meals', this.meals)
        .then()
        .catch(
          err => {
            this.meals.splice(this.meals.indexOf(meal), 1);
          }
        );
    }
    loadMeals(){
        return this.meals.slice();
    }
    fetchMeals() {
        return this.storage.get('meals')
          .then(
            (meals: Meal[]) => {
              this.meals = meals != null ? meals : [];
              return this.meals;
            }
          )
          .catch(
            err => console.log(err)
          );
      }

      deleteMeal(index: number) {
        const meal = this.meals[index];
        this.meals.splice(index, 1);
        this.storage.set('meals', this.meals)
          .then(
            () => {
              this.removeFile(meal);
            }
          )
          .catch(
            err => console.log(err)
          );
      }
    
      private removeFile(meal: Meal) {
        const currentName = meal.imageUrl.replace(/^.*[\\\/]/, '');
        File.removeFile(cordova.file.dataDirectory, currentName)
          .then(
            () => console.log('Removed File')
          )
          .catch(
            () => {
              console.log('Error while removing File');
              this.addMeal(meal.title, meal.recipe, meal.imageUrl);
            }
          );
      }

}