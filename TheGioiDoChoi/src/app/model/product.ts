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
              private _category: string,
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

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }
  //get the price for payment
  get priceCalculate(){
    let price = (this._price_sale>0 && this._price>this._price_sale)? this._price_sale:this._price;
    return price;
  }
  search(txt: string): boolean{
    const arr = txt.split(" ");
    for(let letter of arr){
      if(this._name.includes(letter)) return true;
    }
    return false;
  }
  filterPrice(startPrice: number,endPrice: number){
    let price = this.priceCalculate;
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

  filter(category:string|undefined,startPrice: number|undefined, endPrice: number|undefined, age: string|string[]|undefined, gender: string|string[]|undefined,search: string|undefined) {
    let check = true;
    if(category !=undefined) check &&= this._category==category?true:false;
    if(startPrice !=undefined && endPrice !=undefined) check &&= this.filterPrice(startPrice,endPrice);
    if(age !=undefined) check &&= this.filterAge_Gender_Arr(age,'age');
    if(gender !=undefined) check &&= this.filterAge_Gender_Arr(gender,'gender');
    if(search !=undefined) check &&= this.searchName(search);
    return check;
  }
  searchName(search: string): boolean{
    search = search.toLowerCase();
    let name = this.name.toLowerCase();
    if(name.includes(search)) return true;
    return false;
  }
  filterAge_Gender_Arr(arr: string|string[],type: string){
    let check = false;
    if(Array.isArray(arr)) {
      for (let ele of arr) {
        check ||= this.filterAge_Gender(ele, type);
      }
    }else if(typeof arr == "string") check ||= this.filterAge_Gender(arr,type);
    return check;
  }
}
