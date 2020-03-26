import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private custUrl = "/api/cust/customer/";
  private list = "list";

  constructor(private http: HttpClient) { }

  getList(): Observable<CustomerModelResult> {
    const url = this.custUrl + this.list;
    return this.http.get<CustomerModelResult>(url);
  }
}
