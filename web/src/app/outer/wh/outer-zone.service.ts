import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OuterZoneService {

  private url ="/api/outer/wh/";
  private list = "zone/list";

  constructor(private http:HttpClient)  {
    
  } 

  public getList():Observable<BasicDataModelResult>
  {
     return this.http.get<BasicDataModelResult>(this.url+this.list);
  }
}
