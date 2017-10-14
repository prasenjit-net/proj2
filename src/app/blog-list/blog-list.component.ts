import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("assets/posts.json").subscribe(data => {
      this.blogData = data;
    });
  }

}
