import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RcvService {

  private inboundUrl = '/api/mobile/in/inbound/';
  private list = 'list';
  private rcvList = 'rcv/list';
  private scan = "rcv/scan/";
  private rcv: Rcv;

  constructor(private http: HttpClient) { }

  getList(): Observable<InboundModelResult> {
    let url = this.inboundUrl + this.list;
    return this.http.get<InboundModelResult>(url);
  }

  getRcvList(): Observable<InboundModelResult> {
    let url = this.inboundUrl + this.rcvList;
    return this.http.get<InboundModelResult>(url);
  }

  saveInboudDetail(inboundId: any, carton: string, barcode: string): any {
    this.rcv = { id: 0, orderId: inboundId, optCode: "", skuId: 0, sku: "", carton: carton, barcode: barcode, qty: 1 };
    let url = this.inboundUrl + this.scan + inboundId;
    return this.http.post(url, this.rcv);
  }
}
