import {Component, ViewChild} from '@angular/core';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {BaseChartDirective} from 'ng2-charts';
import {StorageProvider} from '../../providers/storage/storage';
import {Dataset} from '../../models/dataset';
import { Weight2Page } from './../weight2/weight2';
import {IonicPage, ToastController, ViewController} from 'ionic-angular';
import {AlertProvider, UPDATE_ENTRY_DIALOG} from '../../providers/alert/alert';

@IonicPage()
@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html',
})

export class GraphPage {
  entries$;
  weight2Page = Weight2Page;
  lineChartType = 'line';
  lineChartOptions = {
    responsive: true
  };
  lineChartLabels: string[];
  lineChartData: Dataset[] = this.storage.getEmptyDataset();
  @ViewChild(BaseChartDirective) private chart: BaseChartDirective;

  constructor(private screenOrientation: ScreenOrientation, private storage: StorageProvider,
  private view: ViewController, private alert: AlertProvider, private toast: ToastController ) {
    // console.log(storage.driver);
    if (this.screenOrientation != null) {
      this.screenOrientation.onChange().subscribe(() => {
        console.log(this.screenOrientation.type);
        this.getDatasets();
        this.chart.chart.update();
      });
    }
  }

  getDatasets() {
    this.storage.getDatasets().subscribe((entries) => {
      console.log('chart entries: ', entries);
      this.lineChartData = entries['dataset'];
      this.lineChartLabels = entries['labels'];
    });

  }

  ionViewDidEnter() {
    this.getDatasets();
     this.getEntries();
  }


  getToast() {
    return this.toast;
  }

  getEntries(event?:any) {
    this.entries$ = this.storage.getEntries();
    if (event)
      event.complete();
  }

  prompt(entry, doUpdate, doDelete) {
    this.alert.create(UPDATE_ENTRY_DIALOG, entry, this.view, doUpdate, doDelete).present();
  }

  updateEntry(entry) {
    this.prompt(entry, this.doUpdate, this.doDelete);
  }

  doCancel() {
    console.log("Cancel");
  }

  doDelete(entry) {
    console.log("Delete", entry);
    this.storage.deleteEntry(entry).subscribe(() => {
      this.view.instance.getToast().create({
        message: 'Slett',
        duration: 2000,
        position: 'bottom'
      }).present();
      this.view.instance.getEntries();
    });
  }

  doUpdate(entry) {
    console.log("Update");
    this.storage.updateEntry(entry).subscribe(() => {
      this.view.instance.getToast().create({
        message: 'Oppdater',
        duration: 2000,
        position: 'bottom'
      }).present();
      this.view.instance.getEntries();
    });
  }
}
