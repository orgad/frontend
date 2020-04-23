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

  setSku(sku:SkuModel):any
  {
      const url = this.prodUrl + this.skuUrl;
      console.log(sku);
      return this.http.post(url,sku);
  }
}
