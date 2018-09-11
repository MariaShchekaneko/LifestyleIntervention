import {Component, OnInit} from '@angular/core';
import {IonicPage, ToastController, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Entry} from '../../models/entry';
import {StorageProvider} from '../../providers/storage/storage';
import {AlertProvider, ENTRY_EXISTS_DIALOG} from '../../providers/alert/alert';

@IonicPage()
@Component({
  selector: 'page-weight2',
  templateUrl: 'weight2.html',
})
export class Weight2Page implements OnInit {
  entry: Entry = new Entry();

  form: FormGroup;

  constructor(private fb: FormBuilder, private view: ViewController, private storage: StorageProvider, private alert: AlertProvider,
              private toast: ToastController) {
  }

  get today() {
    return this.getFormattedDate(new Date());
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      weight: this.fb.control('', Validators.required),
     // fett: this.fb.control(''),
      //water: this.fb.control('')
    });
  }

  ionViewDidEnter() {
    this.clearForm();
  }

  getToast() {
    return this.toast;
  }

  addWeight(form) {
    this.entry.weight = +form.get('weight').value;
    this.showPromptAndAdd();
  }

  getFormattedDate(d: Date) {
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }

  showPromptAndAdd() {
    this.storage.hasEntryForToday().subscribe((e) => {
      console.log('hasEntry: ', e);
      if (e === true) {
        const confirm = this.alert.create(ENTRY_EXISTS_DIALOG, this.entry, this.view, this.addEntry, this.updateEntry);
        confirm.present();
      } else {
        this.addEntry();
      }
    });
  }

  // is called either from the AlertController or from this Component
  addEntry() {
    this.storage.addEntry(this.entry).subscribe(() => {
      this.view.instance.getToast().create({
          message: 'Vekten ble lagret',
          duration: 2000,
          position: 'middle'
        }).present();
      this.view.instance.clearForm();
      });
  }

  // is called either from the AlertController or from this Component
  updateEntry() {
    this.storage.updateEntry(this.entry).subscribe(() => {
      this.view.instance.getToast().create({
        message: 'Vekten ble oppdatert',
        duration: 2000,
        position: 'middle'
      }).present();
    });
  }

  clearForm() {
    this.form.get('weight').setValue('');
  }

}
