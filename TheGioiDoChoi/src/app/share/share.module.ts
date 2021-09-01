import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaginationComponent } from './pagination/pagination.component';
import {BlogCardComponent} from "./blog-card/blog-card.component";
import {ProductCardSaleComponent} from "./product-card-sale/product-card-sale.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    BreadcrumbComponent,
    PaginationComponent,
    BlogCardComponent,
    ProductCardSaleComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [
    BreadcrumbComponent,
    PaginationComponent,
    BlogCardComponent,
    ProductCardSaleComponent
  ]
})
export class ShareModule { }
