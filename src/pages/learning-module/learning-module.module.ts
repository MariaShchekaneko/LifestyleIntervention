import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearningModulePage } from './learning-module';

@NgModule({
  declarations: [
    LearningModulePage,
  ],
  imports: [
    IonicPageModule.forChild(LearningModulePage),
  ],
})
export class LearningModulePageModule {}
