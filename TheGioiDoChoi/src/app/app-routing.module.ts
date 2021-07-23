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
    loadChildren: ()=> import('./product/product.module').then(productModule =>productModule.ProductModule)
  },
  {
    path:'blog',
    loadChildren:() => import('./blog/blog.module').then(blogModule => blogModule.BlogModule)
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
