import { ToDoPage } from './../to-do/to-do';
import { ToDoService } from './../../services/toDo.service';
import { ModalController } from 'ionic-angular';
import { ToDo } from './../../models/toDo';
import { AddToDosPage } from './../add-to-dos/add-to-dos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-my-to-dos',
  templateUrl: 'my-to-dos.html',
})
export class MyToDosPage implements OnInit {
  addToDosPage = AddToDosPage;
  toDos: ToDo[] = [];
  constructor(public modalCtrl: ModalController,
              private toDoService: ToDoService){}

  ngOnInit() {
    this.toDoService.fetchToDos()
      .then(
        (toDos: ToDo[]) => this.toDos = toDos
      );
  }
  ionViewWillEnter(){
    this.toDos = this.toDoService.loadToDos();
  }
  onOpenToDo(toDo: ToDo, index: number) {
    const modal = this.modalCtrl.create(ToDoPage, {toDo: toDo, index: index});
    modal.present();
    modal.onDidDismiss(
      () => {
        this.toDos = this.toDoService.loadToDos();
      }
    );
  }
}

