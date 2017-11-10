import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public afAuth: AngularFireAuth) { }

  login(event:any) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    event.preventDefault();
  }

  logout(event:any) {
    this.afAuth.auth.signOut();
    event.preventDefault();
  }
}
