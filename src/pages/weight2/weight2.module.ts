import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {Weight2Page} from './weight2';
import {FormsModule} from '@angular/forms';
import {StorageProvider} from '../../providers/storage/storage';
import {AlertProvider} from '../../providers/alert/alert';
import {StorageService} from '../../providers/storage/storage.service';

@NgModule({
  declarations: [
    Weight2Page,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(Weight2Page),
  ],
  providers: [
    AlertProvider,
    StorageProvider,
    StorageService
  ]
})
export class Weight2PageModule {
}
