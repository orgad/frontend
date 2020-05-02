import { Injectable } from '@angular/core';
import { StockCheckMode, StockTypeCode, AdjReason, FreezeReasonCode } from 'src/app/datas/udc-list';

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
    return datas;
  }

  public getFreezeReasonCode(): UdcData[] {
    let datas: UdcData[] = [];
    FreezeReasonCode.forEach(r => {
      datas.push({ code: r.code, name: r.name });
    });
    return datas;
  }

  public getTypeMode(): UdcData[] {
    let datas: UdcData[] = [];
    StockCheckMode.forEach(r => {
      datas.push({ code: r.code, name: r.name });
    });
    return datas;
  }

  public getAdjReason():UdcData[]
  {
    let datas: UdcData[] = [];
    AdjReason.forEach(r => {
      datas.push({ code: r.code, name: r.name });
    });
    return datas;
  }
}
