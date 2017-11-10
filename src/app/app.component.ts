import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  login(event: any) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    event.preventDefault();
  }

  logout(event: any) {
    this.afAuth.auth.signOut().then(v => {
      if (this.router.url === "/new") {
        this.router.navigateByUrl("/");
      }
    });
    event.preventDefault();
  }
}
