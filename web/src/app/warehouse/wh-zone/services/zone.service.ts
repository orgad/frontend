import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private whUrl = "api/wh/zone/";
  private list="list";

  constructor(private http:HttpClient) {
    
   }

  getList():Observable<ZoneModelResult>
  {
     let url = this.whUrl + this.list
     return this.http.get<ZoneModelResult>(url);
  }
}
