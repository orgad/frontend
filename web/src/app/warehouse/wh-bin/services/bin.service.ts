import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BinService {

  private whUrl = "api/wh/bin/";
  private list="list";

  constructor(private http:HttpClient) {
    
   }

  getList():Observable<BinModelResult>
  {
     let url = this.whUrl + this.list
     return this.http.get<BinModelResult>(url);
  }

  getBinListByZone(zoneId:string)
  {
    let url = this.whUrl + this.list+"?zoneId="+zoneId;
     return this.http.get<BinModelResult>(url);
  }
}
