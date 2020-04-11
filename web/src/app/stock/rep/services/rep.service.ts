import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepService {

  private repurl="api/stock/rep/";
  private list="/list";
  private create="create";
  private details = "/details";

  constructor(private http:HttpClient) { }

  public getList():Observable<RepModelResult>
  {
    let url=this.repurl + this.list;
    return this.http.get<RepModelResult>(url);
  }

  public setRep(obj:RepAdd):any
  {
    let url=this.repurl + this.create;
    return this.http.post(url,obj);
  }
}
