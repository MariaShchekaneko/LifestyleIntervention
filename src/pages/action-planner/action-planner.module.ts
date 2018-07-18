import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionPlannerPage } from './action-planner';

@NgModule({
  declarations: [
    ActionPlannerPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionPlannerPage),
  ],
})
export class ActionPlannerPageModule {}
