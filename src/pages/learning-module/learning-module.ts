import { Module } from './../../models/module';
import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
  selector: 'page-learning-module',
  templateUrl: 'learning-module.html',
})
export class LearningModulePage {

  module: Module;
  videoUrl: string;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController
            )
    {
    this.module = this.navParams.get('module');
    }


  onLeave() {
    this.viewCtrl.dismiss();
  }

  
}
