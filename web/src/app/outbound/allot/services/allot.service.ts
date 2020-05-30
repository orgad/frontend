import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllotService {

  private allotUrl="/api/out/allot/";
  private list = "list";
  private details = "/details";
  private gen = "gen";

  constructor(private http:HttpClient) { }
  
  getList(page:number):Observable<AllotModelResult>
  {
    const url =this.allotUrl + this.list + "?page="+page;
    return this.http.get<AllotModelResult>(url);
  }

  getDetails(id:number):Observable<AllotResult>
  {
    const url =this.allotUrl + id + this.details;
    return this.http.get<AllotResult>(url);
  }

  postGen(ids:number[]):Observable<AllotModelResult>
  {
    const url =this.allotUrl + this.gen + "?operatorUserName=rickli";
    return this.http.post<AllotModelResult>(url,ids);
  }
  
}
