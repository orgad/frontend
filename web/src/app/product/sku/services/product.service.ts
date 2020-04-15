import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private prodUrl ="/api/prod/product/";
  private list ="list";
  private productUrl ="create";

  constructor(private http:HttpClient) { }

  getList():Observable<ProductModelResult>
  {
    const url = this.prodUrl + this.list;
    console.log(url);
    return this.http.get<ProductModelResult>(url);
  }

  setProduct(product:ProductModel)
  {
      const url = this.prodUrl + this.productUrl;
      return this.http.post(url,product);
  }
}
