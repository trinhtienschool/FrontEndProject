import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {BreadcrumbService,Breadcrumb} from "angular-crumbs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
    const title = 'Angular Demo';
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
}
