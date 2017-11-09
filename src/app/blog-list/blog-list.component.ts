import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogData: Array<Object>;
  allBlogData: Array<Object>;
  totalBlogCount = 0;


  public get currentPage(): number {
    return Number(this.route.snapshot.paramMap.get("page"));
  }


  public set currentPage(v: number) {
    this.router.navigateByUrl(`/list/${v}`);
  }


  constructor(private route: ActivatedRoute, private router: Router, private firestore : AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('posts').valueChanges()
      .subscribe(data => {
        console.info(data);
        this.allBlogData = data as Array<Object>;
        // this.refreshList("1");
        this.totalBlogCount = this.allBlogData.length;
        this.route.paramMap.subscribe(pm => {
          this.refreshList(pm.get("page"));
        });
      })
  }

  private refreshList(page: string) {
    if (!this.allBlogData) return;
    var pageNumber = Number(page);
    var startIndex = (pageNumber - 1) * 5;
    var endIndex = startIndex + 5;
    this.blogData = this.allBlogData.slice(startIndex, endIndex);
  }

  // startIndex() {
  //   return (this.currentPage - 1) * 5;
  // }

  // endIndex() {
  //   return this.startIndex() + 5;
  // }

  pageChange() {
    // this.blogData = this.allBlogData.slice(this.startIndex(), this.endIndex());
    // this.refreshList();
  }

}
