import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product.component";

const routes: Routes = [
  {
    path:'',
    component: ProductComponent
  }
]
console.log("Dang vao routing Product");
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
