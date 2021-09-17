import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() getProductQuickViewOutput: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() {
  console.log("Dang vao feature-home constructor");
  }

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
    "rows":2,
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
      },

    ]
  };
  getProductQuickView($event: Product) {
    this.getProductQuickViewOutput.emit($event);
    console.log("feature product quickview: ",$event)
  }


}
