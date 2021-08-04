import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogPageComponent} from "./blog-page.component";
import {BlogPageRoutingModule} from "./blog-page-routing.module";
import {BlogDetailComponent} from "./blog-detail/blog-detail.component";
import {BlogComponent} from "./blog-list/blog.component";
import {ShareModule} from "../share/share.module";



@NgModule({
  declarations: [
    BlogPageComponent,
    BlogDetailComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
    ShareModule
  ]
})
export class BlogPageModule { }
