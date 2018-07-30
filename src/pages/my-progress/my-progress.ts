import { ActionPlannerPage } from './../action-planner/action-planner';
import { MyMealsPage } from './../my-meals/my-meals';
import { MyWeightPage } from './../my-weight/my-weight';
import { Component } from '@angular/core';

@Component({
  selector: 'page-my-progress',
  templateUrl: 'my-progress.html',
})
export class MyProgressPage{
  myWeightPage = MyWeightPage;
  myMealsPage = MyMealsPage;
  myGoalsPage = ActionPlannerPage;



}
