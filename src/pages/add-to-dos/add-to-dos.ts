import { ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ToDoService } from './../../services/toDo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'page-add-to-dos',
  templateUrl: 'add-to-dos.html',
})
export class AddToDosPage {
  
  constructor(
              private toDoService: ToDoService,
              private toastCtrl: ToastController) {
  }

  onSubmit(form: NgForm) {
   this.toDoService.addToDo(form.value.date,
                            form.value.title, 
                            form.value.description);
  form.resetForm();
  const toast = this.toastCtrl.create({
    message: 'To Do was added!',
    duration: 2500,
    position: 'middle'
  });
  toast.present();
  }
}
