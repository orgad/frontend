import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkuService {

  private prodUrl ="/api/prod/sku/";
  private list ="list";

  constructor(private http:HttpClient) { }

  getList():Observable<SkuModelResult>
  {
    const url = this.prodUrl + this.list;
    return this.http.get<SkuModelResult>(url);
  }
}
