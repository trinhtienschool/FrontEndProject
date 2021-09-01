import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-age-area',
  templateUrl: './age-area.component.html',
  styleUrls: ['./age-area.component.scss']
})
export class AgeAreaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  age_click(text: string){
    this.router.navigateByUrl("/product?age="+text);
  }
}
