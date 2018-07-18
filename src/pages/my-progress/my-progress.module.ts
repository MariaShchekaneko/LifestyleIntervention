import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProgressPage } from './my-progress';

@NgModule({
  declarations: [
    MyProgressPage,
  ],
  imports: [
    IonicPageModule.forChild(MyProgressPage),
  ],
})
export class MyProgressPageModule {}
