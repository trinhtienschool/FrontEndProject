import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HomeModule} from "./home/home.module";
import { FooterComponent } from './footer/footer.component';
import {ProductModule} from "./product/product.module";
import {BlogModule} from "./blog/blog.module";
import { CartComponent } from './cart/cart.component';
import { CartTableComponent } from './cart/cart-table/cart-table.component';
import { CartTotalComponent } from './cart/cart-total/cart-total.component';
import { ProductLikeComponent } from './cart/product-like/product-like.component';

import {HttpClientModule} from "@angular/common/http";

import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ShareModule} from "./share/share.module";
import { DetailComponent } from './product-detail/detail/detail.component';
import { DescriptionComponent } from './product-detail/description/description.component';
import { RelatedProductComponent } from './product-detail/related-product/related-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CartTableComponent,
    CartTotalComponent,
    ProductLikeComponent,
    ProductDetailComponent,
    DetailComponent,
    DescriptionComponent,
    RelatedProductComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ProductModule,
    BlogModule,
    AppRoutingModule,
    ShareModule,
    HttpClientModule
  ],
  exports:[
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
