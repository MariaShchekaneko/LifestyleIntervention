import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FactsPage } from './facts';

@NgModule({
  declarations: [
    FactsPage,
  ],
  imports: [
    IonicPageModule.forChild(FactsPage),
  ],
})
export class FactsPageModule {}
