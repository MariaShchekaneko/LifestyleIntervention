import { GoalPage } from './../goal/goal';
import { Goal } from './../../models/goal';
import { AddGoalPage } from './../add-goal/add-goal';
import { ActionPlannerService } from './../../services/actionPlanner.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-action-planner',
  templateUrl: 'action-planner.html',
})
export class ActionPlannerPage implements OnInit{

  addGoalPage = AddGoalPage;
  goals: Goal[] = [];
  constructor(public modalCtrl: ModalController,
              private actionPlannerService: ActionPlannerService){}

  ngOnInit() {
    this.actionPlannerService.fetchGoals()
      .then(
        (goals: Goal[]) => this.goals = goals
      );
  }
  ionViewWillEnter(){
    this.goals = this.actionPlannerService.loadGoals();
  }
  onOpenGoal(goal: Goal, index: number) {
    const modal = this.modalCtrl.create(GoalPage, {goal: goal, index: index});
    modal.present();
    modal.onDidDismiss(
      () => {
        this.goals = this.actionPlannerService.loadGoals();
      }
    );
  }
}
