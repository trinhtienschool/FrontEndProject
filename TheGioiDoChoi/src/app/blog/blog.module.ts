import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import {ShareModule} from "../share/share.module";



@NgModule({
  declarations: [
    BlogComponent,
    BlogCardComponent
  ],
  exports: [
    BlogComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class BlogModule { }
