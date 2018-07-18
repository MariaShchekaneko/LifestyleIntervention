import { NavParams, ModalController } from 'ionic-angular';
import { LearningModulesService } from './../../services/learningModules.service';
import { LearningModulePage } from './../learning-module/learning-module';
import { Module } from './../../data/module.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-modules-by-category',
  templateUrl: 'modules-by-category.html',
})
export class ModulesByCategoryPage implements OnInit{
  module: Module[];
  learningModulesGroup: {category: string, modules: Module[], icon: string}[];
 
  constructor(public modalCtrl: ModalController,
              private NavParams: NavParams,
    private learningModulesService: LearningModulesService
  ){}

  ngOnInit() {
    this.learningModulesGroup = this.NavParams.data;
  }

  ionViewWillEnter(){
   this.module = this.learningModulesService.getLearningModules();
  }
  onOpenModule(module: Module){
    const modal = this.modalCtrl.create(LearningModulePage, {module: module});
    modal.present();
    modal.onDidDismiss(
      () => {
        this.module = this.learningModulesService.getLearningModules();
      }
    );
  }
  
}
