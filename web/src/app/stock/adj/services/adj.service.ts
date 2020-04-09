import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdjService {

  private stockurl="api/stock/adj/";
  private list="/list";
  private create="create";
  private details = "/details";

  constructor(private http:HttpClient) { }

  public getList():Observable<AdjModelResult>
  {
    let url=this.stockurl + this.list;
    return this.http.get<AdjModelResult>(url);
  }

  /*
  public setAdj(obj:AdjCheckAdd):any
  {
    let url=this.stockurl + this.create;
    return this.http.post(url,obj);
  }

  public getDetails(id:number):Observable<AdjDetails>
  {
    let url=this.stockurl + id + this.details;
    return this.http.get<AdjDetails>(url);
  }
  */
}
