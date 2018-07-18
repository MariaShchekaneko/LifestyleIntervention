import { ActionPlannerPage } from './../action-planner/action-planner';
import { MyMealsPage } from './../my-meals/my-meals';
import { MyBloodPressurePage } from './../my-blood-pressure/my-blood-pressure';
import { MyWeightPage } from './../my-weight/my-weight';
import { Component } from '@angular/core';

@Component({
  selector: 'page-my-progress',
  templateUrl: 'my-progress.html',
})
export class MyProgressPage{
  myBloodPressurePage = MyBloodPressurePage;
  myWeightPage = MyWeightPage;
  myMealsPage = MyMealsPage;
  myGoalsPage = ActionPlannerPage; 



}
