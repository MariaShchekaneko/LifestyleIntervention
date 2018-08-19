import { ActionPlannerPage } from './../action-planner/action-planner';
import { GraphPage } from './../graph/graph';
import { Component } from '@angular/core';

@Component({
  selector: 'page-my-progress',
  templateUrl: 'my-progress.html',
})
export class MyProgressPage{
  myGoalsPage = ActionPlannerPage;
  graphPage = GraphPage;



}
