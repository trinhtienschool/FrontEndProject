import { Component, OnInit } from '@angular/core';
import {Categories} from "../../model/categories";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: Categories|undefined;
  constructor() {
    this.categories = new Categories();
  }

  ngOnInit(): void {
  }

}
