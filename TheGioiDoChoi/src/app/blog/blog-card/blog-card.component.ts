import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../../model/blog";

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() blog: Blog|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
