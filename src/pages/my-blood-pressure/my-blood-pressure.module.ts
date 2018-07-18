import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBloodPressurePage } from './my-blood-pressure';

@NgModule({
  declarations: [
    MyBloodPressurePage,
  ],
  imports: [
    IonicPageModule.forChild(MyBloodPressurePage),
  ],
})
export class MyBloodPressurePageModule {}
