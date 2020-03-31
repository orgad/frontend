import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandOverService {

  private handOverUrl = "/api/mobile/out/handover/";
  private list = "list";
  private tasklist = "task-list";
  private scan ="/scan";

  constructor(private http:HttpClient) { }

  getList(pageIndex: number): Observable<HandOverModelResult> {
    let url = this.handOverUrl + this.list;
    url = url + "?page=" + pageIndex;
    return this.http.get<HandOverModelResult>(url);
  }

  getTaskList(pageIndex: number): Observable<HandOverModelResult> {
    let url = this.handOverUrl + this.tasklist;
    url = url + "?page=" + pageIndex;
    return this.http.get<HandOverModelResult>(url);
  }

  saveDetail(handId:string,courier:string,expressCode:string):any
  {
    let url = this.handOverUrl + handId + this.scan;
    return this.http.post<RecheckModelResult>(url,{courierCode:courier, expressCode : expressCode});
  }
}
