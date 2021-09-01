import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const  routes: Routes = [

  {
    path:'home',
    component:HomeComponent,
    data: {breadcrumb: "Trang chủ"}
  },
  {
    path:'product',
    loadChildren: ()=> import('./product/product-page.module').then(productModule =>productModule.ProductPageModule),
    data: {breadcrumb: "Sản phẩm trang chủ"}
  },

  {
    path:'blog',
    loadChildren:() => import('./blog/blog-page.module').then(blogModule => blogModule.BlogPageModule),
    data: {breadcrumb: "Blog trang chủ"}
  },
  {
    path:'contact',
    loadChildren:() => import('./contact/contact.module').then(contactModule=>contactModule.ContactModule),
    data: {breadcrumb: "Contact trang chủ"}
  },
  {
    path:'cart',
    loadChildren:() => import('./cart-checkout/cart-checkout.module').then(cartCheckout=>cartCheckout.CartCheckoutModule),
    data: {breadcrumb: "Cart trang chủ"}
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
