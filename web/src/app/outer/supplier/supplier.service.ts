import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private supplierUrl = "/api/outer/supplier/";
  private courierUrl = "courier/list";

  constructor(private http: HttpClient) { }

  getCourierList(): Observable<BasicDataModelResult> {
    let url = this.supplierUrl + this.courierUrl;
    return this.http.get<BasicDataModelResult>(url);
  }
}
