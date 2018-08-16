import { Goal } from './../../models/goal';
import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { ActionPlannerService } from './../../services/actionPlanner.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html',
})
export class GoalPage {

  goal: Goal;
  index: number;

  constructor(public navParams: NavParams,
   private alertCtrl: AlertController,
  private viewCtrl: ViewController,
  private goalsService: ActionPlannerService) {
    this.goal = this.navParams.get('goal');
    this.index = this.navParams.get('index');
  }
  onLeave() {
    this.viewCtrl.dismiss();
  }

 onDelete() {
       const alert = this.alertCtrl.create ({
       title: 'Slett',
       message: 'Er du sikker at du ønsker å slette denne loggen?',
       buttons: [
         {
           text: 'Ja',
           handler: () => {
             this.goalsService.deleteGoal(this.index);
             this.onLeave();
             console.log('Ok');
           }
         },
         {
           text: 'Nei',
           handler: () => {
             console.log('Canceled');
           }
         }
       ]
     });
     alert.present();
   }
}
