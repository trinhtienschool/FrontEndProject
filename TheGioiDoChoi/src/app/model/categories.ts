export class Categories {
  private _dc_vandong: string[][] = [['Đồ chơi dã ngoại','dochoidangoai'],['Đồ dùng nhà bếp','dodungnhabep'],['Đồ chơi dưới nước','dochoiduoinuoc'],['Xe','xe']];
  private _dc_tritue: string[][] = [['Lego','lego'],['Smart game','smartgame'],['Puzzle','puzzle']];
  private _dc_ptgt: string[][] = [['Mô hình xe','mohinhxe'],['Máy bay tên lửa','maybaytenlua'],['Xe điều khiển','xedieukhien']];
  private _dc_nv: string[][] = [['Búp bê','bupbe'],['Robot','robot']];

  constructor() {}

  get dc_vandong(): string[][] {
    return this._dc_vandong;
  }

  set dc_vandong(value: string[][]) {
    this._dc_vandong = value;
  }

  get dc_tritue(): string[][] {
    return this._dc_tritue;
  }

  set dc_tritue(value: string[][]) {
    this._dc_tritue = value;
  }

  get dc_ptgt(): string[][] {
    return this._dc_ptgt;
  }

  set dc_ptgt(value: string[][]) {
    this._dc_ptgt = value;
  }

  get dc_nv(): string[][] {
    return this._dc_nv;
  }

  set dc_nv(value: string[][]) {
    this._dc_nv = value;
  }
}
