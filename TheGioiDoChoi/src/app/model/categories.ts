export class Categories {
  private _dc_vandong: string[] = ['Đồ chơi dã ngoại','Đồ chơi nhà bếp','Đồ chơi dưới nước','Xe đạp'];
  private _dc_tritue: string[] = ['Rubik','Smart game','Puzzle'];
  private _dc_ptgt: string[] = ['Xe mô hình','Máy bay, tên lửa','Xe cứu hỏa'];
  private _dc_nv: string[] = ['Búp bê','Robot'];

  constructor() {}



  get dc_vandong(): string[] {
    return this._dc_vandong;
  }

  set dc_vandong(value: string[]) {
    this._dc_vandong = value;
  }

  get dc_tritue(): string[] {
    return this._dc_tritue;
  }

  set dc_tritue(value: string[]) {
    this._dc_tritue = value;
  }

  get dc_ptgt(): string[] {
    return this._dc_ptgt;
  }

  set dc_ptgt(value: string[]) {
    this._dc_ptgt = value;
  }

  get dc_nv(): string[] {
    return this._dc_nv;
  }

  set dc_nv(value: string[]) {
    this._dc_nv = value;
  }
}
