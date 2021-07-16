export class Product{
  constructor(private _name: string,
              private _price :number ,
              private _price_sale: number,
              private _brand: string,
              private _product_id: string,
              private _description: string,
              private _images: string[],
              ) { }
  get percentSale(): number{
    if(this._price_sale==0) return 0;
    return Math.round((this._price - this._price_sale)*100/this._price);
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get price_sale(): number {
    return this._price_sale;
  }

  set price_sale(value: number) {
    this._price_sale = value;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(value: string) {
    this._brand = value;
  }

  get product_id(): string {
    return this._product_id;
  }

  set product_id(value: string) {
    this._product_id = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get images(): string[] {
    return this._images;
  }

  set images(value: string[]) {
    this._images = value;
  }
}