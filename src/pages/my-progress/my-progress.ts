import { ActionPlannerPage } from './../action-planner/action-planner';
import { MyWeightPage } from './../my-weight/my-weight';
import { Component } from '@angular/core';

@Component({
  selector: 'page-my-progress',
  templateUrl: 'my-progress.html',
})
export class MyProgressPage{
  myWeightPage = MyWeightPage;
  myGoalsPage = ActionPlannerPage;



}
