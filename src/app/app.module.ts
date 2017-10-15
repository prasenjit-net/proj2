import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { DisqusModule } from "ngx-disqus";

import { AppComponent } from './app.component';
import { BlogExcerptComponent } from './blog-excerpt/blog-excerpt.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { MarkdownComponent } from './markdown.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BlogExcerptComponent,
    BlogListComponent,
    RightPanelComponent,
    BlogPostComponent,
    MarkdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DisqusModule.forRoot("blog-template-pp"),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
