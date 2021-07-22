export class Product{
  constructor(private _name: string,
              private _price :number ,
              private _price_sale: number,
              private _brand: string,
              private _product_id: string,
              private _description: string,
              private _age: string,
              private _gender: string,
              private _images: string[],
              ) {
    if(this._price<this._price_sale){
      const temp = this._price;
      this._price = this._price_sale;
      this._price_sale = temp;
    }
  }
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

  get age(): string {
    return this._age;
  }

  set age(value: string) {
    this._age = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }
  search(txt: string): boolean{
    const arr = txt.split(" ");
    for(let letter of arr){
      if(this._name.includes(letter)) return true;
    }
    return false;
  }
  filterPrice(startPrice: number,endPrice: number){
    let price = (this._price_sale>0 && this._price>this._price_sale)? this._price_sale:this._price;
    if(price>=startPrice && price<=endPrice) return true;
    else return false;
  }
  filterAge_Gender(para: string, type: string){
    // console.log("para: "+para+" ; type"+type+" : this.age: "+this._age+" ; this.gender: "+this._gender);
    if(type == 'age'){
      if(para == this._age) return true;
    }else if(type == 'gender'){
      if(para == this._gender) return true;
    }
    return false;
  }
  toString(){
    return "name: "+this._name+" , "+"img1: "+this._images;
  }

  filter(priceStartFilter: number, priceEndFilter: number, ageFilter: string[], genderFilter: string[]) {
    let check = this.filterPrice(priceStartFilter,priceEndFilter);
    if(ageFilter.length != 0) check &&=this.filterAge_Gender_Arr(ageFilter,'age');
    if(genderFilter.length != 0) check &&= this.filterAge_Gender_Arr(genderFilter,'gender');

    return check;
  }
  filterAge_Gender_Arr(arr: string[],type: string){
    let check = false;
    for(let ele of arr){
      check ||=this.filterAge_Gender(ele,type);
    }
    return check;
  }
}
