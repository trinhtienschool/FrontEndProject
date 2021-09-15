import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const  routes: Routes = [

  {
    path:'home',
    component:HomeComponent,
    data: {breadcrumb: "Trang chủ",
    animation:'home'}
  },
  {
    path:'product',
    loadChildren: ()=> import('./product/product-page.module').then(productModule =>productModule.ProductPageModule),
    data: {breadcrumb: "Sản phẩm", animation:'product'}
  },

  {
    path:'blog',
    loadChildren:() => import('./blog/blog-page.module').then(blogModule => blogModule.BlogPageModule),
    data: {breadcrumb: "Bài viết", animation: "blog"}
  },
  {
    path:'contact',
    loadChildren:() => import('./contact/contact.module').then(contactModule=>contactModule.ContactModule),
    data: {breadcrumb: "Liên hệ", animation: 'contact'}
  },
  {
    path:'cart',
    loadChildren:() => import('./cart-checkout/cart-checkout.module').then(cartCheckout=>cartCheckout.CartCheckoutModule),
    data: {breadcrumb: "Giỏ hàng",animation: 'cart'}
  },
  {
    path:'love',
    loadChildren:() => import('./love/love.module').then(loveModule=>loveModule.LoveModule),
    data: {breadcrumb: "Yêu thích",animation: 'love'}
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];
console.log("Dang vao routing root")
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
