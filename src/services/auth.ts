import firebase from 'firebase';
export class AuthService {
    signup(email: string, password: string){
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    signin(email: string, password: string){
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
    logout(){
        firebase.auth().signOut();
    }
    resetPassword(email: string): any {
        return firebase.auth().sendPasswordResetEmail(email);
      }
}