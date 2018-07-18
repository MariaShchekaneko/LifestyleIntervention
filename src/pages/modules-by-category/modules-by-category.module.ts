import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModulesByCategoryPage } from './modules-by-category';

@NgModule({
  declarations: [
    ModulesByCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ModulesByCategoryPage),
  ],
})
export class ModulesByCategoryPageModule {}
