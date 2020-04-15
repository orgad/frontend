import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OuterBinService {

  private url ="/api/outer/wh";
  private list = "/bin/list";

  constructor(private http:HttpClient)  {
    
  } 

  public getList():Observable<BasicDataModelResult>
  {
     return this.http.get<BasicDataModelResult>(this.url+this.list);
  }
}
