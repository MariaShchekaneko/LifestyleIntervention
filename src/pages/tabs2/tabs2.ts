import { MyProgressPage } from './../my-progress/my-progress';
import { LearningModulesPage } from './../learning-modules/learning-modules';
import { Component } from '@angular/core';


@Component({
  selector: 'page-tabs2',
  templateUrl: 'tabs2.html',
})
export class Tabs2Page {
  learningModulesPage = LearningModulesPage;
  myProgressPage = MyProgressPage;
}