import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() parent_title: string|undefined;
  @Input() childe_title: string|undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
