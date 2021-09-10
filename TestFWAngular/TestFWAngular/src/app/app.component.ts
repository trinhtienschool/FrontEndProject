import { Component } from '@angular/core';
import {Options} from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestFWAngular';
  value: number = 10000;
  highValue: number = 100000;
  options: Options = {
    floor: 10000,
    ceil: 4000000
  };

  getValue(value: number, highValue: number) {
    console.log("Value: "+value+" , highValue: "+highValue);
  }

  onSliderChange(selectedValues: number[]) {
    console.log(selectedValues[0]+"  && "+selectedValues[1]);
  }

  //Slick
  slides = [
    {img: "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/a/1/a100_7_.jpg"},
    {img: "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/3/4/3458e72d514a83cc942ff12879beacdf.jpeg"},
    {img: "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/1/3/134411_4_.jpg"},
    {img: "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/1/4/1423004881_9_.jpg"},
    {img: "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/o/t/otg-pop01-red_3_.jpg"},
    {img: "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/2/0/20070_02.jpg"},
    {img: "https://u6wdnj9wggobj.vcdn.cloud/media/catalog/product/cache/7c9924b6276ad76a951c1e786fcf2062/e/6/e6946_2_.jpg"}
  ];
  slideConfig = { "infinite": true,
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "dots": true,
    "autoplay": false,
    "useCSS": true,
    "autoplaySpeed": 800,
    "responsive": [
      {
        "breakpoint": 1024,
        "settings": {
          "slidesToShow": 3
        }
      },
      {
        "breakpoint": 600,
        "settings": {
          "slidesToShow": 2
        }
      },
      {
        "breakpoint": 480,
        "settings": {
          "slidesToShow": 1
        }
      }
    ]
  };

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit($event: { event: any; slick: any }) {
    console.log("Slick init");
  }

  breakpoint($event: { event: any; slick: any; breakpoint: any }) {
    console.log("break point")
  }

  afterChange($event: { event: any; slick: any; currentSlide: number; first: boolean; last: boolean }) {
    console.log("After change");
  }

  beforeChange($event: { event: any; slick: any; currentSlide: number; nextSlide: number }) {
    console.log("Before change: ");
  }

}
