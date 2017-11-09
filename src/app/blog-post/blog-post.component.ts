import { Post } from './../post';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import "rxjs/add/operator/mergeMap";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  md: string;
  document: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  constructor(private http: HttpClient, private route: ActivatedRoute, private firestore : AngularFirestore) { }

  ngOnInit() {
    this.route.paramMap.subscribe(pm=>{
      var link = pm.get("link");
      this.document = this.firestore.doc<Post>(`posts/${link}`);
      this.post = this.document.valueChanges();
      this.post.subscribe(post =>{
        console.info(post);
        this.http.get(`assets/${post.link}.md`, {responseType: 'text'})
        .subscribe(mdText => {
          this.md = mdText;
        });
      });
    });
  }

}
