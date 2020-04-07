import { Injectable } from '@angular/core';
import { StockCheckMode, StockTypeCode } from 'src/app/datas/udc-list';

@Injectable({
  providedIn: 'root'
})
export class UdcService {

  constructor() { }

  public getTypeCode(): UdcData[] {
    let datas: UdcData[] = [];
    StockTypeCode.forEach(r => {
      datas.push({ code: r.code, name: r.name });
    });
    console.log(datas);
    return datas;
  }

  public getTypeMode(): UdcData[] {
    let datas: UdcData[] = [];
    StockCheckMode.forEach(r => {
      datas.push({ code: r.code, name: r.name });
    });
    console.log(datas);
    return datas;
  }
}
