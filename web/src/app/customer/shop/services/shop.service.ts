import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private shopUrl = "/api/cust/shop/";
  private list = "list";

  constructor(private http: HttpClient) { }

  getList(): Observable<ShopModelResult> {
    const url = this.shopUrl + this.list;
    return this.http.get<ShopModelResult>(url);
  }
}
