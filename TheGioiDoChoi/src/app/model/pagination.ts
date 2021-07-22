export class Pagination{
  constructor(private _current: number,
              private _itemsPerPage:number,
              private _sumOfItems: number,
  ) {
  }
  getStart(): number{
    return (this.current-1)*this._itemsPerPage;
  }
  getEnd(): number{
    if(this._sumOfItems>=this.getStart() + this._itemsPerPage)
    return this.getStart()+this._itemsPerPage;
    else return this._sumOfItems;
  }
  numOfPage(): number{
    // console.log(this._sumOfItems/this._itemsPerPage);
    let sum = Math.trunc(this._sumOfItems/this._itemsPerPage)
    if(this._sumOfItems % this._itemsPerPage > 0) sum+=1;
    return sum;
  }
  get current(): number {
    return this._current;
  }

  set current(value: number) {
    this._current = value;
  }

  get itemsPerPage(): number {
    return this._itemsPerPage;
  }

  set itemsPerPage(value: number) {
    this._itemsPerPage = value;
  }


  get sumOfItems(): number {
    return this._sumOfItems;
  }

  set sumOfItems(value: number) {
    this._sumOfItems = value;
  }
}
