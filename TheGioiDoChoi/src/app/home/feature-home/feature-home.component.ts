import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ProductSlickList} from "../../model/product-slick-list";
import {Product} from "../../model/product";
@Component({
  selector: 'app-feature-home',
  templateUrl: './feature-home.component.html',
  styleUrls: ['./feature-home.component.scss']
})
export class FeatureHomeComponent implements OnInit{
  @Input() bestsaller: Product[]|undefined;
  @Input() latest: Product[] | undefined;
  @Input() hightlight: Product[] | undefined;
  constructor() {
  console.log("Dang vao feature-home constructor");
  }

  ngOnInit(): void {

  }




}
