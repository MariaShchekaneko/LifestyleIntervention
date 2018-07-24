import { LearningModulesPage } from './../pages/learning-modules/learning-modules';
import { MyProgressPage } from './../pages/my-progress/my-progress';
import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { Platform, MenuController, NavController} from 'ionic-angular';
import { MessagesPage } from '../pages/messages/messages';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
}) 

export class MyApp {
  rootPage : any = LoginPage;
  mePage = MyProgressPage;
  learningModulesPage = LearningModulesPage;
  messagesPage = TabsPage;
  


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
