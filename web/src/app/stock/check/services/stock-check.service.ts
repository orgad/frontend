import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockCheckService {

  private stockurl="api/stock/check/";
  private list="/list";
  private create="create";
  private details = "/details";

  constructor(private http:HttpClient) { }

  public getList():Observable<StockCheckModelResult>
  {
    let url=this.stockurl + this.list;
    return this.http.get<StockCheckModelResult>(url);
  }

  public setStockCheck(obj:StockCheckAdd):any
  {
    let url=this.stockurl + this.create;
    return this.http.post(url,obj);
  }

  public getDetails(id:number):Observable<StockCheckDetails>
  {
    let url=this.stockurl + id + this.details;
    return this.http.get<StockCheckDetails>(url);
  }

}
