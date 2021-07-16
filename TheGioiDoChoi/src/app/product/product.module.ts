import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductCardSaleComponent } from './product-card-sale/product-card-sale.component';
import {ShareModule} from "../share/share.module";
import { ShopToolbarComponent } from './shop-toolbar/shop-toolbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductRangeSlideComponent } from './product-range-slide/product-range-slide.component';
import { AgeGenderComponent } from './age-gender/age-gender.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductCardSaleComponent,
    ShopToolbarComponent,
    ProductListComponent,
    CategoriesComponent,
    ProductRangeSlideComponent,
    AgeGenderComponent,
  ],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    ProductCardSaleComponent,
    ProductComponent,
  ]
})
export class ProductModule {
  constructor() {
    console.log("Dang vao ProductModule")
  }
}
