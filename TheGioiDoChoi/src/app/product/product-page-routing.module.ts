import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductPageComponent} from "./product-page.component";
import {ProductListComponent} from "./product-list-page/product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductComponent} from "./product-list-page/product.component";

const routes: Routes = [
  {
    path:'',
    component: ProductPageComponent,
    children:[
      {
        path: '',
        component: ProductComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
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
  exports: [
    RouterModule
  ]
})
export class ProductPageRoutingModule { }
