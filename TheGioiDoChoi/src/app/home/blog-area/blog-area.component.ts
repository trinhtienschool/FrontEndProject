import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../../model/blog";

@Component({
  selector: 'app-blog-area',
  templateUrl: './blog-area.component.html',
  styleUrls: ['./blog-area.component.scss']
})
export class BlogAreaComponent implements OnInit {
  @Input() blogs: Blog[] |undefined;
  constructor() { }

  ngOnInit(): void {
  }
  slideConfig = {
    "infinite": true,
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "dots": true,
    "autoplay": true,
    "useCSS": true,

    "autoplaySpeed": 3000,

    "swipeToSlide":true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "slidesToShow": 3
        }
      },
      {
        "breakpoint": 768,
        "settings": {
          "slidesToShow": 2
        }
      },
      {
        "breakpoint": 576,
        "settings": {
          "slidesToShow": 1
        }
      }

    ]
  };
}
