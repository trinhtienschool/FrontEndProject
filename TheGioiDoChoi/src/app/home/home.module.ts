import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { AgeAreaComponent } from './age-area/age-area.component';
import { FeatureHomeComponent } from './feature-home/feature-home.component';
import {ProductModule} from "../product/product.module";
import { FuildBannerComponent } from './fuild-banner/fuild-banner.component';
import { SaleAreaComponent } from './sale-area/sale-area.component';
import { BestSallerComponent } from './best-saller/best-saller.component';
import { PersonTrafficComponent } from './person-traffic/person-traffic.component';
import { BlogAreaComponent } from './blog-area/blog-area.component';
import {BlogModule} from "../blog/blog.module";



@NgModule({
  declarations: [
    HomeComponent,
    HeroAreaComponent,
    AgeAreaComponent,
    FeatureHomeComponent,
    FuildBannerComponent,
    SaleAreaComponent,
    BestSallerComponent,
    PersonTrafficComponent,
    BlogAreaComponent
  ],
  exports: [
    HomeComponent,
    SaleAreaComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    BlogModule
  ]
})
export class HomeModule { }
