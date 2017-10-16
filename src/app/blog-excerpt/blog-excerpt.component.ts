import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-excerpt',
  templateUrl: './blog-excerpt.component.html',
  styleUrls: ['./blog-excerpt.component.css']
})
export class BlogExcerptComponent implements OnInit {

  constructor() { }

  @Input("entry")
  entryData:any;

  ngOnInit() {
  }

}
