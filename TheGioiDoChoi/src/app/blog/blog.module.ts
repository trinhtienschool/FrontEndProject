import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogCardComponent } from './blog-card/blog-card.component';



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
    CommonModule
  ]
})
export class BlogModule { }
