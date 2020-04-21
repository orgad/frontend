import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreezeService {

  private freezeUrl="api/stock/freeze/";
  private listUrl = "list";
  private detailsUrl="/details";

  constructor(private http:HttpClient) { }

  getList():Observable<FreezeModelResult>
  {
    const url = this.freezeUrl + this.listUrl;
     return this.http.get<FreezeModelResult>(url);
  }

  getDetails(id:number):Observable<FreezeDetails>
  {
     const url = this.freezeUrl + id +this.detailsUrl;
     return this.http.get<FreezeDetails>(url);
  }
}
