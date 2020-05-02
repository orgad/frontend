import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private prodUrl ="/api/prod/catalog/";
  private list ="list";

  constructor(private http:HttpClient) { }

  getList():Observable<CatalogModelResult>
  {
    const url = this.prodUrl + this.list;
    return this.http.get<CatalogModelResult>(url);
  }
}
