import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbComponent,
    PaginationComponent
  ]
})
export class ShareModule { }
