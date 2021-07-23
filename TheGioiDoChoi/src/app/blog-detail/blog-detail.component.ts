import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../model/blog";
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
    img1: "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/r/b/rb12b-9_2_1.jpg"
  }

  constructor() { }
  ngOnInit(): void {
  }

}
