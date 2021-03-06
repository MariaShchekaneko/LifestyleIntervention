import { Injectable, NgZone } from '@angular/core';
import { Settings } from '../settings';
import { NavController, Platform, ToastController, AlertController } from 'ionic-angular';
import { LoadingProvider } from './loading';
import { AlertProvider } from './alert';
import { Http } from '@angular/http';

import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';

@Injectable()
export class LoginProvider {

  private navCtrl: NavController;
  constructor(public loadingProvider: LoadingProvider, public alertProvider: AlertProvider, public zone: NgZone, public googleplus: GooglePlus,
    public platform: Platform, public afAuth: AngularFireAuth, public http: Http, public toastCtrl: ToastController, public facebook: Facebook, public alert: AlertController) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.zone.run(() => {
          this.navCtrl.setRoot(Settings.homePage, { animate: false });
        });
      }
    });
  }

  setNavController(navCtrl) {
    this.navCtrl = navCtrl;
  }

  facebookLogin() {

    if(this.platform.is('core')){
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res=>{
        console.log(res);
        console.log(res.credential.accessToken);
        let credential = firebase.auth.FacebookAuthProvider.credential(res.credential.accessToken);
        console.log(credential);
        this.loadingProvider.show();
        firebase.auth().signInWithCredential(credential).then((success) => {
          let data = success.additionalUserInfo.profile;
          console.log(data);
          let uid = firebase.auth().currentUser.uid;
          this.createNewUser(uid,data.first_name,data.email,uid,'I am available','Facebook',data.picture.data.url);
          this.loadingProvider.hide();
        })
        .catch((error) => {
          console.log(error);
          this.loadingProvider.hide();
          this.alertProvider.showErrorMessage(error["code"]);
        });
      }).catch( error=>{
        console.log(error);
      });
    } else{
      this.facebook.login(['public_profile', 'email']).then( res => {
        console.log(res);
        let credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        this.loadingProvider.show();
        firebase.auth().signInWithCredential(credential)
        .then((success) => {
          console.log(success);
          this.facebook.api("me/?fields=id,email,first_name,picture",["public_profile","email"])
          .then( data => {
            console.log(data)
            let uid = firebase.auth().currentUser.uid;
            this.createNewUser(uid,data.first_name,data.email,uid,'I am available','Facebook',data.picture.data.url);
          })
          .catch( err => {
            console.log(err);
            this.loadingProvider.hide();
          })

        })
        .catch((error) => {
          this.loadingProvider.hide();
          this.alertProvider.showErrorMessage(error["code"]);
        });

      }).catch( err=> console.log(err));
    }
  }



  // Login on Firebase given the email and password.
  emailLogin(email, password) {
    this.loadingProvider.show();
    firebase.auth().signInWithEmailAndPassword(email, password).then((success) => {
        this.loadingProvider.hide();
    }).catch((error) => {
        this.loadingProvider.hide();
        this.alertProvider.showErrorMessage(error["code"]);
    });
  }


  // Register user on Firebase given the email and password.
  register(name, username, email, password,img) {
    this.loadingProvider.show();
    firebase.auth().createUserWithEmailAndPassword(email, password).then((success) => {
        let user=firebase.auth().currentUser;
        this.createNewUser(user.uid, name , username,user.email,"I am available","Firebase",img);
        this.loadingProvider.hide();
      }).catch((error) => {
        this.loadingProvider.hide();
        this.alertProvider.showErrorMessage(error["code"]);
      });
  }

  // Send Password Reset Email to the user.
  sendPasswordReset(email) {
    console.log(email);
   // if(email != null || email != undefined || email != ""){
      this.loadingProvider.show();
      firebase.auth().sendPasswordResetEmail(email).then((success) => {
          this.loadingProvider.hide();
          this.alertProvider.showPasswordResetMessage(email);
        }).catch((error) => {
          this.loadingProvider.hide();
          this.alertProvider.showErrorMessage(error["code"]);
        });
   // }
  }

  // Creating new user after signed up
  createNewUser(userId,name,username,email,description = "I'm available",provider,img="assets/images/profile.png"){
    let dateCreated= new Date();
    firebase.database().ref('accounts/'+userId).update({dateCreated,username,name,userId,email,description,provider,img});
  }

}
