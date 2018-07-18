import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearningModulesPage } from './learning-modules';

@NgModule({
  declarations: [
    LearningModulesPage,
  ],
  imports: [
    IonicPageModule.forChild(LearningModulesPage),
  ],
})
export class LearningModulesPageModule {}
