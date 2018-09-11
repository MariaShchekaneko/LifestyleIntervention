import {Injectable} from '@angular/core';
import {StorageProvider} from '../storage/storage';
import {Alert, AlertController, ViewController} from 'ionic-angular';
import {Entry} from '../../models/entry';
import {getFormattedDateTime} from '../utils';

export const ENTRY_EXISTS_DIALOG = 1;
export const UPDATE_ENTRY_DIALOG = 2;

@Injectable()
export class AlertProvider {

  constructor(private alert: AlertController, private storage: StorageProvider) {
  }

  create(ID: number, entry: Entry, view: ViewController, updateHandler?: any, deleteHandler?: any): Alert {
    let dialog = {};
    let alert: Alert;
    switch (ID) {
      case ENTRY_EXISTS_DIALOG:
        dialog = {
          title: 'Endre dagens logg',
          message: 'Du har allerede registrert vekten din i dag',
          buttons: [
            {
              text: 'Avbrytt',
              role: 'cancel'
            },
            {
              text: 'Legg til',
              handler: updateHandler,
              storage: this.storage,
              entry: entry,
              view: view
            },
            {
              text: 'Endre dagens logg',
              handler: deleteHandler,
              storage: this.storage,
              entry: entry,
              view: view
            }
          ]
        };
        break;

      case UPDATE_ENTRY_DIALOG:
        let d = new Date();
        d.setTime(entry.time);
        dialog = {
          title: 'Endre',
          message: getFormattedDateTime(d),
          inputs: [
            {
              type: 'number',
              name: 'weight',
              placeholder: 'Vekt',
              value: entry.weight
            },
            {
              type: 'hidden',
              name: 'time',
              value: entry.time
            }
          ],
          buttons: [
            {
              text: 'Avbrytt',
              role: 'cancel'
            },
            {
              text: 'Slett',
              handler: deleteHandler,
              storage: this.storage,
              entry: entry,
              view: view
            },
            {
              text: 'Lagre',
              handler: updateHandler,
              storage: this.storage,
              entry: entry,
              view: view
            }
          ]
        };
        break;

    }
    alert = this.alert.create(dialog);
    return alert;
  }
}

