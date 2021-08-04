import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactAddressComponent} from "./contact-address/contact-address.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {ContactComponent} from "./contact.component";
import {ContactRoutingModule} from "./contact-routing.module";



@NgModule({
  declarations: [
    ContactAddressComponent,
    ContactFormComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
