import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourierService {

  private prodUrl ="/api/sup/courier/";
  private list ="list";

  constructor(private http:HttpClient) { }

  getList():Observable<CourierModelResult>
  {
    const url = this.prodUrl + this.list;
    return this.http.get<CourierModelResult>(url);
  }
}
