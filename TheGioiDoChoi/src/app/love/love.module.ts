import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoveRoutingModule} from "./love-routing.module";
import {ShareModule} from "../share/share.module";
import {ReactiveFormsModule} from "@angular/forms";
import { LoveableComponent } from './loveable/loveable.component';


@NgModule({
  declarations: [

    LoveableComponent
  ],
  exports: [
    LoveableComponent
  ],
  imports: [
    CommonModule,
    LoveRoutingModule,
    ShareModule,
    ReactiveFormsModule
  ]
})
export class LoveModule { }
