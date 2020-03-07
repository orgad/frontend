import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InStService {

  private stUrl="api/in/st/";
  private list="list";
  private details = "details";

  constructor(private http:HttpClient) { }

  getList():Observable<StModel[]>
  {
    let url = this.stUrl + this.list;
    return this.http.get<StModel[]>(url);
  }

  getDetails(id:number):Observable<StResult>
  {
    let url = this.stUrl + id+ "/" + this.details;
    return this.http.get<StResult>(url);
  }
}
