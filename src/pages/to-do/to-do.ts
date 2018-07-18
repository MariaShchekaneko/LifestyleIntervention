import { ToDoService } from './../../services/toDo.service';
import { ToDo } from './../../models/toDo';
import { AlertController } from 'ionic-angular';
import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-to-do',
  templateUrl: 'to-do.html',
})
export class ToDoPage {
  
    toDo: ToDo;
    index: number;
  
    constructor(public navParams: NavParams,
    private viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private toDoService: ToDoService) {
      this.toDo = this.navParams.get('toDo');
      this.index = this.navParams.get('index');
    }
    onLeave() {
      this.viewCtrl.dismiss();
    }
  
    onDelete() {
      const alert = this.alertCtrl.create({
        title: 'Remove To Do',
        message: 'Are you sure you want to remove this To Do?',
        buttons: [
          {
            text: 'Yes, go ahead',
            handler: () => {
              this.toDoService.deleteToDo(this.index);
              this.onLeave();
              console.log('Ok');
            }
          },
          {
            text: 'No, I changed my mind',
            handler: () => {
              console.log('Canceled');
            }
          }
        ]
      });
      alert.present();
    }
    
  }