import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-email-password-login',
  templateUrl: './email-password-login.component.html',
  styleUrls: ['./email-password-login.component.css']
})
export class EmailPasswordLoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(u=>{
      console.info(u);
    });
  }

  login(email:string, password:string ) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(v=>{
      console.info("Logged in");
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  newPost(){
    this.router.navigateByUrl("/login");
  }
}
