import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component'
import { BlogPostComponent } from './blog-post/blog-post.component'

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
    pathMatch: 'full'
  }, {
    path: 'post/:link',
    component: BlogPostComponent
  }, {
    path: '**',
    component: BlogListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }