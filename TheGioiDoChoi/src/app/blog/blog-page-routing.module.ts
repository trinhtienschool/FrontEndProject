import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./blog-list/blog.component";
import {BlogPageComponent} from "./blog-page.component";
import {BlogDetailComponent} from "./blog-detail/blog-detail.component";

const routes: Routes = [
  {
    path:'',
    component: BlogPageComponent,
    children:[
      {
        path:'',
        component: BlogComponent,
        data: {breadcrumb: "Bài viết"}
      },
      {
        path:':id',
        component: BlogDetailComponent,
        data: {breadcrumb: "Chi tiết bài viết"}
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class BlogPageRoutingModule { }
