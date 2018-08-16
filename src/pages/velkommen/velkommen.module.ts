import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VelkommenPage } from './velkommen';

@NgModule({
  declarations: [
    VelkommenPage,
  ],
  imports: [
    IonicPageModule.forChild(VelkommenPage),
  ],
})
export class VelkommenPageModule {}
