import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { ActionPlannerService } from './../../services/actionPlanner.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'page-add-goal',
  templateUrl: 'add-goal.html',
})
export class AddGoalPage {

  constructor(
    private actionPlannerService: ActionPlannerService,
    private toastCtrl: ToastController) {
}
  onSubmit(form: NgForm) {
    this.actionPlannerService.addGoal(form.value.goalName, 
                             form.value.barrierName,
                             form.value.strategyName);
   form.resetForm();
   const toast = this.toastCtrl.create({
    message: 'Goal was added!',
    duration: 2500,
    position: 'middle'
  });
  toast.present();
  }

}
