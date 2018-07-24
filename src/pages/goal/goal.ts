import { Goal } from './../../models/goal';
import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { ActionPlannerService } from './../../services/actionPlanner.service';


@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html',
})
export class GoalPage {

  goal: Goal;
  index: number;

  constructor(public navParams: NavParams,
  private viewCtrl: ViewController,
  private goalsService: ActionPlannerService) {
    this.goal = this.navParams.get('goal');
    this.index = this.navParams.get('index');
  }
  onLeave() {
    this.viewCtrl.dismiss();
  }

  onDelete() {
    this.goalsService.removeItem(this.index);
    this.onLeave();
  }
}
