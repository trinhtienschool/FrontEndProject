import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
  // public products: Product[] =[];
  cartItems = []

  constructor() {

  }

  ngOnInit(): void {
  }

}
