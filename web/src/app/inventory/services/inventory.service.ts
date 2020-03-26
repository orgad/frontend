import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  invtUrl = "/api/invt/";
  list = "list";
  detaillist = "detail-list";
  details = "details";
  logList = "log-list";

  constructor(private http: HttpClient) {

  }

  getInvtList(): Observable<InvtModelResult> {
    let url = this.invtUrl + this.list;
    return this.http.get<InvtModelResult>(url);
  }

  getInvtDetailList(barcode: string): Observable<InvtDetailModelResult> {
    let url = this.invtUrl + this.detaillist;
    if (barcode != null)
      url += "?barcode=" + barcode;
    return this.http.get<InvtDetailModelResult>(url);
  }

  getInvtLogList(barcode: string): Observable<InvtLogModelResult> {
    let url = this.invtUrl + this.logList;
    if (barcode != null)
      url += "?barcode=" + barcode;
    return this.http.get<InvtLogModelResult>(url);
  }

  getInvtDetails(skuid: string): Observable<InvtDetailModelResult> {
    let url = this.invtUrl + this.details + "?skuid=" + skuid;
    return this.http.get<InvtDetailModelResult>(url);
  }
}
