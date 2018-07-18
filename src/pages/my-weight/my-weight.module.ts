import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyWeightPage } from './my-weight';

@NgModule({
  declarations: [
    MyWeightPage,
  ],
  imports: [
    IonicPageModule.forChild(MyWeightPage),
  ],
})
export class MyWeightPageModule {}
