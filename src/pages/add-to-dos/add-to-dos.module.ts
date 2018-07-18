import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddToDosPage } from './add-to-dos';

@NgModule({
  declarations: [
    AddToDosPage,
  ],
  imports: [
    IonicPageModule.forChild(AddToDosPage),
  ],
})
export class AddToDosPageModule {}
