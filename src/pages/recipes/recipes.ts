import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private document: DocumentViewer) {
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }*/
  openPai(){const options: DocumentViewerOptions = {
    title: 'My PDF'
  }
  this.document.viewDocument('assets/recipes/eplePai.pdf', 'application/pdf', options);}
  
  
  
  openSuppe(){
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    this.document.viewDocument('assets/recipes/tomatoS.pdf', 'application/pdf', options);
  }
}
