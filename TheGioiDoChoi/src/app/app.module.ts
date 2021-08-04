import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HomeModule} from "./home/home.module";
import { FooterComponent } from './footer/footer.component';

import {HttpClientModule} from "@angular/common/http";

import {ShareModule} from "./share/share.module";
import { registerLocaleData} from "@angular/common";
import localeVi from '@angular/common/locales/vi';
import { NotFoundComponent } from './not-found/not-found.component';

registerLocaleData(localeVi,'vi-VN')
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],

  imports: [
    BrowserModule,
    HomeModule,
    ShareModule,
    HttpClientModule,
    AppRoutingModule
  ],
    exports: [
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
