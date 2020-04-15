import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OuterProductService {

  private productUrl = "/api/outer/prod/";

  private pUrl = "product";

  constructor(private http: HttpClient) { }

  getList(): Observable<BasicDataModelResult> {
    let url = this.productUrl + this.pUrl;
    return this.http.get<BasicDataModelResult>(url);
  }
}
