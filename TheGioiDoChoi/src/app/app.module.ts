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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CartTableComponent,
    CartTotalComponent,
    ProductLikeComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ProductModule,
    BlogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
