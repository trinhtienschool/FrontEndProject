import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCheckoutComponent } from './cart-checkout.component';
import {CartCheckoutRoutingModule} from "./cart-checkout-routing.module";
import {CartTableComponent} from "./cart/cart-table/cart-table.component";
import {CartTotalComponent} from "./cart/cart-total/cart-total.component";
import {ProductLikeComponent} from "./cart/product-like/product-like.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {BillingAddressComponent} from "./checkout/billing-address/billing-address.component";
import {ShareModule} from "../share/share.module";



@NgModule({
  declarations: [
    CartCheckoutComponent,
    CartTableComponent,
    CartTotalComponent,
    ProductLikeComponent,
    CheckoutComponent,
    BillingAddressComponent
  ],
  imports: [
    CommonModule,
    CartCheckoutRoutingModule,
    ShareModule
  ]
})
export class CartCheckoutModule { }
