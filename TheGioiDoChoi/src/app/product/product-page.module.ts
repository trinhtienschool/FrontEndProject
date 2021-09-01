import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import {ProductPageRoutingModule} from "./product-page-routing.module";
import {DescriptionComponent} from "./product-detail/description/description.component";
import {DetailComponent} from "./product-detail/detail/detail.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {AgeGenderComponent} from "./product-list-page/age-gender/age-gender.component";
import {CategoriesComponent} from "./product-list-page/categories/categories.component";
import {ProductListComponent} from "./product-list-page/product-list/product-list.component";
import {ProductRangeSlideComponent} from "./product-list-page/product-range-slide/product-range-slide.component";
import {ShopToolbarComponent} from "./product-list-page/shop-toolbar/shop-toolbar.component";
import {ProductComponent} from "./product-list-page/product.component";
import {ShareModule} from "../share/share.module";
import {RelatedProductComponent} from "./product-detail/related-product/related-product.component";
import {BreadcrumbModule} from "angular-crumbs";



@NgModule({
  declarations: [
    ProductPageComponent,
    DescriptionComponent,
    DetailComponent,
    ProductDetailComponent,
    AgeGenderComponent,
    CategoriesComponent,
    RelatedProductComponent,
    ProductListComponent,
    ProductRangeSlideComponent,
    ShopToolbarComponent,
    ProductComponent,
  ],
    imports: [
        CommonModule,
        ProductPageRoutingModule,
        ShareModule,
        BreadcrumbModule
    ]
})
export class ProductPageModule { }
