import { ModulesByCategoryPage } from './../modules-by-category/modules-by-category';
import { Component, OnInit } from '@angular/core';
import { Module } from '../../data/module.interface';
import modules from '../../data/modules';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-learning-modules',
  templateUrl: 'learning-modules.html',
})
export class LearningModulesPage implements OnInit{
  moduleCollection: {category: string, modules: Module[], icon: string}[];
  modulesByCategoryPage = ModulesByCategoryPage;

  constructor(public modalCtrl: ModalController){}

  ngOnInit() {
    this.moduleCollection = modules;
    
  }
}
