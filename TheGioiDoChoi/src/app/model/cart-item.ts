import {Product} from "./product";

export class CartItem{
  constructor(private _name: string,
              private _image: string,
              private _price: number,
              private _quantity: number) {
  }
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  totalPrice(): number{
    return this._price*this._quantity;
  }
}