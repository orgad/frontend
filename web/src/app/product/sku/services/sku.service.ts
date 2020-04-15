import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkuService {

  private prodUrl ="/api/prod/sku/";
  private list ="list";
  private skuUrl ="create";

  constructor(private http:HttpClient) { }

  getList():Observable<SkuModelResult>
  {
    const url = this.prodUrl + this.list;
    console.log(url);
    return this.http.get<SkuModelResult>(url);
  }

  setSku(sku:SkuModel)
  {
      const url = this.prodUrl + this.skuUrl;
      return this.http.post(url,sku);
  }
}
