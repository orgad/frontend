import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockCheckService {

  private stockurl = "api/mobile/stock/check/";
  private list = "task-list";
  private create = "/scan";
  private details = "/details";

  constructor(private http: HttpClient) { }

  public getList(): Observable<StockCheckModelResult> {
    let url = this.stockurl + this.list;
    return this.http.get<StockCheckModelResult>(url);
  }

  public getDetails(id: number): Observable<StockCheckDetails> {
    let url = this.stockurl + id + this.details;
    return this.http.get<StockCheckDetails>(url);
  }

  public saveDetail(checkId: string, carton: string, binCode: string, barcode: string): any {
    let url = this.stockurl + checkId + this.create;
    let data = { carton: carton, binCode: binCode, barcode: barcode };
    return this.http.post(url, data);
  }

}
