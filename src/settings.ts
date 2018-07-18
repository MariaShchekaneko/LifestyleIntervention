import { TabsPage } from './pages/tabs/tabs';

export namespace Settings {

  export const firebaseConfig = {
    apiKey: "AIzaSyB4opbosWB4c6CAzlkmfzQudpX8N02PhGM",
    authDomain: "lifestyle-intervention.firebaseapp.com",
    databaseURL: "https://lifestyle-intervention.firebaseio.com",
    projectId: "lifestyle-intervention",
    storageBucket: "lifestyle-intervention.appspot.com",
    messagingSenderId: "812704429521"
  };
  
  export const facebookLoginEnabled = true;
  export const googleLoginEnabled = true;
  export const phoneLoginEnabled = true;

  export const facebookAppId: string = "964885876999551";
  export const googleClientId: string = "812704429521-aio77k7ojshui8m2mtcj0vl3fci9esrh.apps.googleusercontent.com"; 
  export const customTokenUrl: string = "https://us-central1-chatapp-3f829.cloudfunctions.net/getCustomToken";
  
  export const homePage = TabsPage;
}