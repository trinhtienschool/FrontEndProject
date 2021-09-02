import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCheckoutComponent } from './cart-checkout.component';
import {CartCheckoutRoutingModule} from "./cart-checkout-routing.module";
import {CartTableComponent} from "./cart/cart-table/cart-table.component";
import {CartTotalComponent} from "./cart/cart-total/cart-total.component";
import {ProductLikeComponent} from "./cart/product-like/product-like.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {ShareModule} from "../share/share.module";
import {CartComponent} from "./cart/cart.component";
import {ProductItemComponent} from "./cart/product-like/product-item/product-item.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CartCheckoutComponent,
    CartComponent,
    ProductItemComponent,
    CartTableComponent,
    CartTotalComponent,
    ProductLikeComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    CartCheckoutRoutingModule,
    ShareModule,
    ReactiveFormsModule
  ]
})
export class CartCheckoutModule { }
