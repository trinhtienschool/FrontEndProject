import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-best-saller',
  templateUrl: './best-saller.component.html',
  styleUrls: ['./best-saller.component.scss']
})
export class BestSallerComponent implements OnInit {
  @Input() bestSaller: Product[]| undefined;
  @Output() getProductQuickViewOutput: EventEmitter<Product>=new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {


  }
  slideConfig = {
    "infinite": true,
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "dots": true,
    "autoplay": true,
    "useCSS": true,
    "autoplaySpeed": 3000,

    "swipeToSlide":true,
    "responsive": [
      {
        "breakpoint": 1200,
        "settings": {
          "slidesToShow": 2
        }
      },
      {
        "breakpoint": 992,
        "settings": {
          "slidesToShow": 1
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

  getProductQuickView($event: Product) {
    this.getProductQuickViewOutput.emit($event);
  }
}
