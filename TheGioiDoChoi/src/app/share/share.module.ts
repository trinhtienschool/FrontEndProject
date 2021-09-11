import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaginationComponent } from './pagination/pagination.component';
import {BlogCardComponent} from "./blog-card/blog-card.component";
import {ProductCardSaleComponent} from "./product-card-sale/product-card-sale.component";
import {RouterModule} from "@angular/router";
import {BreadcrumbModule} from "angular-crumbs";
import {ProductCardDetailComponent} from "./product-card-detail/product-card-detail.component";
import { ProductCardQuickviewComponent } from './product-card-quickview/product-card-quickview.component';




@NgModule({
  declarations: [
    BreadcrumbComponent,
    PaginationComponent,
    BlogCardComponent,
    ProductCardSaleComponent,
    ProductCardDetailComponent,
    ProductCardQuickviewComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        BreadcrumbModule,

    ],
  exports: [
    BreadcrumbComponent,
    PaginationComponent,
    BlogCardComponent,
    ProductCardSaleComponent,
    ProductCardDetailComponent,
    ProductCardQuickviewComponent
  ]
})
export class ShareModule { }
