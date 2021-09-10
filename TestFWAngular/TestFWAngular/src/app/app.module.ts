import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {NpnSliderModule} from "npn-slider";
// import {SlickCarouselModule} from "ngx-slick-carousel";

import {SlickCarouselModule} from "ngx-slick-carousel";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
    NpnSliderModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
