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
import { registerLocaleData} from "@angular/common";
import localeVi from '@angular/common/locales/vi';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { BillingAddressComponent } from './checkout/billing-address/billing-address.component';
import { ContactAddressComponent } from './contact/contact-address/contact-address.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { BlogDetailHeaderComponent } from './blog-detail/blog-detail-header/blog-detail-header.component';
import { BlogDetailArticleComponent } from './blog-detail/blog-detail-article/blog-detail-article.component';

registerLocaleData(localeVi,'vi-VN')
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
    BlogDetailComponent,
    CheckoutComponent,
    ContactComponent,
    BillingAddressComponent,
    ContactAddressComponent,
    ContactFormComponent,
    BlogDetailHeaderComponent,
    BlogDetailArticleComponent,
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
