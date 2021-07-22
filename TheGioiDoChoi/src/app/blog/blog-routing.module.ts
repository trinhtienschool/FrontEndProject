import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { CommonModule } from '@angular/common';
import {BlogComponent} from "./blog.component";

const routes : Routes = [
  {
    path:'',
    component:BlogComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
