import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-sale-area',
  templateUrl: './sale-area.component.html',
  styleUrls: ['./sale-area.component.scss']
})
export class SaleAreaComponent implements OnInit {
  @Input() saleProducts: Product[]|undefined;
  @Output() getProductQuickViewOutput: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }
  slideConfig = {
    "infinite": true,
    "slidesToShow": 5,
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
          "slidesToShow": 4
        }
      },
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

  getProductQuickView($event: Product) {
    this.getProductQuickViewOutput.emit($event);
  }
}
