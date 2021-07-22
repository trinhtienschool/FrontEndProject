import { Component, OnInit } from '@angular/core';
import {LoadJsonService} from "../service/load-json/load-json.service";
import {isArray} from "rxjs/internal-compatibility";
import {Product} from "../model/product";
import {Blog} from "../model/blog";
import {Util} from "../model/util";
declare const onloadFunction: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bestsaller: Product[] = [];
  latest: Product[] = [];
  hightlight: Product[] = [];
  sale: Product[] = [];
  bestsaller_area: Product[] = [];
  bupbe_robot: Product[] = [];
  ptgt: Product[] = [];
  blog: Blog[] = [];

  constructor(private httpData: LoadJsonService) {}

  ngOnInit(): void {
    this.httpData.getData("home.json").subscribe(value => {
      Util.convertObj2ProArr(value.bestsaller,this.bestsaller);
      Util.convertObj2ProArr(value.hightlight,this.hightlight);
      Util.convertObj2ProArr(value.latest,this.latest);
      Util.convertObj2ProArr(value.sale,this.sale);
      Util.convertObj2ProArr(value.bestsaller_area,this.bestsaller_area);
      Util.convertObj2ProArr(value.bupbe_robot,this.bupbe_robot);
      Util.convertObj2ProArr(value.ptgt,this.ptgt);
      Util.convertObj2BlogArr(value.blog,this.blog);
    })
    onloadFunction();
  }



}
