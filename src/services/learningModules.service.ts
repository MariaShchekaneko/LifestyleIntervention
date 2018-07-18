import { Module } from './../data/module.interface';

export class LearningModulesService{
    private learningModules: Module[] = [];


    getLearningModules() {
        return this.learningModules.slice();
    }
}