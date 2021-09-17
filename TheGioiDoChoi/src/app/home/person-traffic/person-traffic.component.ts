import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-person-traffic',
  templateUrl: './person-traffic.component.html',
  styleUrls: ['./person-traffic.component.scss']
})
export class PersonTrafficComponent implements OnInit {
  @Input() sectionTitle: string|undefined;
  @Input() products : Product[] | undefined;
  @Output() getProductQuickViewOutput: EventEmitter<Product> = new EventEmitter<Product>();

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
    "rows":2,
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
  getProductQuickView($event: Product) {
    this.getProductQuickViewOutput.emit($event)
  }
}
