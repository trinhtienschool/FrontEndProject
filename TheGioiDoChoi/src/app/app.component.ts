import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {BreadcrumbService,Breadcrumb} from "angular-crumbs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {animate, group, query, style, transition, trigger} from "@angular/animations";
import {animationRoute} from "./share/animation";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    animationRoute
  ]
})
export class AppComponent implements OnInit{
  title = 'TheGioiDoChoi';

  constructor(private titleService: Title,
              private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs=>{
      this.titleService.setTitle(this.createTitle(crumbs));
    })
  }

  private createTitle(routerCollection: Breadcrumb[]) {
    const title = 'Thế giới đồ chơi';
    const titles = routerCollection.filter((route)=>route.displayName);
    if(!titles.length) return title;
    const  routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`;
  }

  private titlesToString(titles: Breadcrumb[]) {
    return titles.reduce((prev,curr)=>{
      return `${curr.displayName} - ${prev}`
    },'');
  }

  prepareRoute(myOutlet: RouterOutlet) {
    return myOutlet && myOutlet.activatedRouteData &&
      myOutlet.activatedRouteData['animation'];
  }
}
