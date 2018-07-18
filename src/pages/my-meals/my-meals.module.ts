import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyMealsPage } from './my-meals';

@NgModule({
  declarations: [
    MyMealsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyMealsPage),
  ],
})
export class MyMealsPageModule {}
