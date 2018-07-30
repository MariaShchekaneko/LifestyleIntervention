import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FactsPage } from '../facts/facts';
import { RecipesPage } from '../recipes/recipes';

@IonicPage()
@Component({
  selector: 'page-tools',
  templateUrl: 'tools.html',
})
export class ToolsPage {

  factsPage = FactsPage;
  recipesPage = RecipesPage;
}
