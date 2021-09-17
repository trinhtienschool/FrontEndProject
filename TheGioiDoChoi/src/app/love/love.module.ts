import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoveRoutingModule} from "./love-routing.module";
import {ShareModule} from "../share/share.module";
import {ReactiveFormsModule} from "@angular/forms";
import { LoveableComponent } from './loveable/loveable.component';
import {LoveComponent} from "./love.component";


@NgModule({
  declarations: [
    LoveComponent,
    LoveableComponent
  ],
  exports: [
    LoveComponent,
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
