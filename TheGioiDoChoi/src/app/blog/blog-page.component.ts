import { Component, OnInit } from '@angular/core';
import {animationRoute} from "../share/animation";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  animations:[
    animationRoute
  ]
})
export class BlogPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prepareRoute(myOutlet: RouterOutlet) {
    return myOutlet && myOutlet.activatedRouteData &&
      myOutlet.activatedRouteData['animation'];
  }
}
