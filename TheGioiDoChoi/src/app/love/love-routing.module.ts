import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoveComponent} from "./love.component";

const routes: Routes=[
  {
    path:'',
    component:LoveComponent,
    data:{breadcrumb:'Yêu thích',animation:'lovePage'}
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LoveRoutingModule { }
