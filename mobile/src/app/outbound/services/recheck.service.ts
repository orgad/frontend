import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecheckService {

  private handOverUrl = "/api/mobile/out/recheck/";
  private list = "list";
  private tasklist="task-list";
  private scan = "/scan";

  constructor(private http:HttpClient) { }

  getList(pageIndex: number): Observable<RecheckModelResult> {
    let url = this.handOverUrl + this.list;
    url = url + "?page=" + pageIndex;
    return this.http.get<RecheckModelResult>(url);
  }

  getTaskList(pageIndex: number): Observable<RecheckModelResult> {
    let url = this.handOverUrl + this.tasklist;
    url = url + "?page=" + pageIndex;
    return this.http.get<RecheckModelResult>(url);
  }

  saveDetail(recheckId:string,barcode:string)
  {
    let url = this.handOverUrl + recheckId + this.scan;
    return this.http.post<RecheckModelResult>(url,{carton:null, barcode : barcode});
  }
}
