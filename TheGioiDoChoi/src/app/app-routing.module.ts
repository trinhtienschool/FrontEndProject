import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const  routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'product',
    loadChildren: ()=> import('./product/product-page.module').then(productModule =>productModule.ProductPageModule)
  },

  {
    path:'blog',
    loadChildren:() => import('./blog/blog-page.module').then(blogModule => blogModule.BlogPageModule)
  },
  {
    path:'contact',
    loadChildren:() => import('./contact/contact.module').then(contactModule=>contactModule.ContactModule)
  },
  {
    path:'cart',
    loadChildren:() => import('./cart-checkout/cart-checkout.module').then(cartCheckout=>cartCheckout.CartCheckoutModule)
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
