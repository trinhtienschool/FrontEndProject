import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CartComponent} from "./cart/cart.component";
import {CartCheckoutComponent} from "./cart-checkout.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes : Routes = [
  {
    path:'',
    component:CartCheckoutComponent,
    children:[
      {
        path:'',
        component:CartComponent,
        data:{breadcrumb: 'Giỏ hàng',animation:'cart'}
      },
      {
        path:'checkout',
        component:CheckoutComponent,
        data: {breadcrumb: "Thanh toán",animation: 'checkout'}
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
  exports:[RouterModule]
})
export class CartCheckoutRoutingModule { }
