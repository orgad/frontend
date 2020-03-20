import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PickService {

  private pickUrl = "/api/mobile/out/pck/";
  private list = "list";
  private scan = "/scan";
  private advice = "/advice"
  private pick: PickingDetail;

  constructor(private http: HttpClient) {

  }

  getList(): Observable<PickingModelResult> {
    let url = this.pickUrl + this.list;
    return this.http.get<PickingModelResult>(url);
  }

  getAdvice(pickId: string): any {
    let url = this.pickUrl + pickId + this.advice;
    return this.http.get(url);
  }

  saveDetail(pickId: string, barcode: string,carton:string, binCode: string) {
    this.pick = { hid: pickId, barcode: barcode, carton: null, binCode: binCode };
    let url = this.pickUrl + pickId + this.scan;
    return this.http.post(url, this.pick);
  }
}
