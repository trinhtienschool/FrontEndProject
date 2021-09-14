import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoveRoutingModule} from "./love-routing.module";
import {ShareModule} from "../share/share.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoveRoutingModule,
    ShareModule,
    ReactiveFormsModule
  ]
})
export class LoveModule { }
