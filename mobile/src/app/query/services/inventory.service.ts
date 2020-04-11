import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  invtUrl = "/api/mobile/invt/";
  bybarcode = "by-barcode";
  bybinCode = "by-bin-code";

  constructor(private http: HttpClient) {

  }

  getByBarcodeList(barcode: string): Observable<QueryInvtModel[]> {
    let url = this.invtUrl + this.bybarcode + "?barcode=" + barcode;
    return this.http.get<QueryInvtModel[]>(url);
  }

  getByBinCodeList(binCode:string): Observable<QueryInvtModel[]> {
    let url = this.invtUrl + this.bybinCode + "?binCode=" + binCode;
    return this.http.get<QueryInvtModel[]>(url);
  }

}
