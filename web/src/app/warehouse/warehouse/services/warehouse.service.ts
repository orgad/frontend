import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private whUrl = "api/wh/warehouse/";
  private list="list";

  constructor(private http:HttpClient) {
    
   }

  getList():Observable<WarehouseModelResult>
  {
     let url = this.whUrl + this.list
     return this.http.get<WarehouseModelResult>(url);
  }
}
