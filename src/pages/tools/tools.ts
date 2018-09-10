import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FactsPage } from '../facts/facts';
import { RecipesPage } from '../recipes/recipes';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

@IonicPage()
@Component({
  selector: 'page-tools',
  templateUrl: 'tools.html',
})
export class ToolsPage {

  factsPage = FactsPage;
  recipesPage = RecipesPage;
   constructor(public navCtrl: NavController, private document: DocumentViewer, private file: File) { }

    openShoppingGuide() {
      const options: DocumentViewerOptions = {
        title: 'My PDF'
      }
      this.document.viewDocument('assets/shoppingGuide.pdf', 'application/pdf', options);
    }
}
