import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyToDosPage } from './my-to-dos';

@NgModule({
  declarations: [
    MyToDosPage,
  ],
  imports: [
    IonicPageModule.forChild(MyToDosPage),
  ],
})
export class MyToDosPageModule {}
