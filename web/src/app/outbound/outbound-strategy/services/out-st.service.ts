import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutStService {

  private stUrl="api/out/st/";
  private list="list";
  private details = "details";

  constructor(private http:HttpClient) { }

  getList():Observable<OutStModelResult>
  {
    let url = this.stUrl + this.list;
    return this.http.get<OutStModelResult>(url);
  }

  getDetails(id:number):Observable<OutStResult>
  {
    let url = this.stUrl + id+ "/" + this.details;
    return this.http.get<OutStResult>(url);
  }
}
