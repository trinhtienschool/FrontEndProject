import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../model/blog";
declare const onloadFunction: any;
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  public blog:Blog={
    name: "Ten blog",
    date: "22/07/2021",
    author: "Nam",
    content: "Day la content",
    img1: "http://localhost:63342/FrontEndProject/Template_Nhuan/image/car.jpg"
  }

  constructor() { }
  ngOnInit(): void {
    onloadFunction();
  }

}
