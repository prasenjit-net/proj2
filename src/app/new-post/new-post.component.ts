import { AngularFireAuth } from 'angularfire2/auth';
import { Post } from './../post';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  save(title: string, description: string, body: string) {
    const link = title.replace(/\W/g,'-');
    const now = new Date();
    const author = this.afAuth.authState.subscribe(user => {
      const post: Post = { title: title, content: body, link: link, date: now, author: user.email, description: description };
      this.firestore.doc<Post>(`posts/${link}`).set(post).then(v => {
        this.router.navigateByUrl(`post/${link}`);
      }).catch(e => {
        console.error(e);
      });
    });
  }
}
