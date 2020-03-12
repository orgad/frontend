import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  invtUrl = "/api/invt/";
  list = "list";
  detaillist = "detail-list";
  details = "details";

  constructor(private http:HttpClient) { 
    
  } 

  getInvtList():Observable<InvtModelResult>
  {
    let url = this.invtUrl + this.list;
    return this.http.get<InvtModelResult>(url);
  }

  getInvtDetailList():Observable<InvtDetailModelResult>
  {
    let url = this.invtUrl + this.detaillist;
    return this.http.get<InvtDetailModelResult>(url);
  }

  getInvtDetails(skuid:string):Observable<InvtDetailModelResult>
  {
    let url = this.invtUrl + this.details + "?skuid="+skuid;
    console.log(url);
    return this.http.get<InvtDetailModelResult>(url);
  }
}
