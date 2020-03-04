import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  invtUrl = "/api/invt/";
  list = "list";
  details = "detail/list";

  constructor(private http:HttpClient) { 
    
  } 

  getInvtList():Observable<InvtModelResult>
  {
    let url = this.invtUrl + this.list;
    return this.http.get<InvtModelResult>(url);
  }

  getInvtDetails(sku:string):Observable<InvtDetailModelResult>
  {
    let url = this.invtUrl + this.details + "?sku="+sku;
    console.log(url);
    return this.http.get<InvtDetailModelResult>(url);
  }
}
