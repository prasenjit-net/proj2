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
  blogData: any;
  allBlogData: Array<Object>;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get("assets/posts.json").subscribe(data => {
      this.allBlogData = data as Array<Object>;
      this.route.paramMap.subscribe(pm => {
        var link = pm.get("link");
        for (var entry of this.allBlogData) {
          if (entry["link"] === link) {
            this.blogData = entry;
            this.http.get(`assets/${entry["link"]}.md`, {responseType: 'text'})
            .subscribe(mdText => {
              this.md = mdText;
            });
          }
        }
      });
    });
    // this.http.get("assets/posts.json")
    //   .mergeMap(x => Observable.from(x as Array<Object>))
    //   .filter(e => {
    //     var link = this.route.snapshot.paramMap.get("link");
    //     var r = e["link"] === link;
    //     return r;
    //   })
    //   .subscribe(data => {
    //     this.blogData = data;
    //     this.http.get(`assets/${data["link"]}.md`, {responseType: 'text'})
    //     .subscribe(mdText => {
    //       this.md = mdText;
    //     });
    //   });
  }

}
