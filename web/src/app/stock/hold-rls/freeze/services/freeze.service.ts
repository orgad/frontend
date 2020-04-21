import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreezeService {

  private freezeUrl="api/stock/freeze/";
  private listUrl = "list";

  constructor(private http:HttpClient) { }

  getList():Observable<FreezeModelResult>
  {
    const url = this.freezeUrl + this.listUrl;
     return this.http.get<FreezeModelResult>(url);
  }
}
