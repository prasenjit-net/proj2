import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component'
import { BlogPostComponent } from './blog-post/blog-post.component'
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  {
    path: 'list/:page',
    component: BlogListComponent,
    pathMatch: 'full'
  }, {
    path: 'post/:link',
    component: BlogPostComponent
  }, {
    path: 'new',
    component: NewPostComponent
  }, {
    path: '**',
    redirectTo: '/list/1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }