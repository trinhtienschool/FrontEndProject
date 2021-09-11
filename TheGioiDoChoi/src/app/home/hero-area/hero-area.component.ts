import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";


@Component({
  selector: 'app-hero-area',
  templateUrl: './hero-area.component.html',
  styleUrls: ['./hero-area.component.scss']
})
export class HeroAreaComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }
  slideConfig = { "infinite": true,
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "autoplay": true,
    "useCSS": true,
    "autoplaySpeed": 3000
  };


}
