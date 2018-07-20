import { LearningModulesPage } from './../pages/learning-modules/learning-modules';
import { MyProgressPage } from './../pages/my-progress/my-progress';
import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
//import { TabsPage } from './../pages/tabs/tabs';
import { Platform, MenuController, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
}) 
export class MyApp {
  rootPage = LoginPage;
  mePage = MyProgressPage;
  learningModulesPage = LearningModulesPage;


  @ViewChild('nav') nav: NavController;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      platform.pause.subscribe(()=>{
        if(firebase.auth().currentUser)
          firebase.database().ref('accounts/'+firebase.auth().currentUser.uid).update({'online': false});
      });
      
      platform.resume.subscribe(()=>{
        if(firebase.auth().currentUser && localStorage.getItem('showOnline') == 'true')
          firebase.database().ref('accounts/'+firebase.auth().currentUser.uid).update({'online': true});
      })
    });
  }
  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
  
}
