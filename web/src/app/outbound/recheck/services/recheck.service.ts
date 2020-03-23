import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecheckService {

  private recheckUrl = "/api/out/recheck/";
  private list = "list";
  private details = "?operatorUserName=rickli"
  private affirmUrl = "affirm";

  constructor(private http: HttpClient) { }

  getList(pageIndex: number): Observable<RecheckModelResult> {
    let url = this.recheckUrl + this.list;
    url = url + "?page=" + pageIndex;
    return this.http.get<RecheckModelResult>(url);
  }

  getDetails(id:number): Observable<RecheckResult> {
    let url = this.recheckUrl + this.details + id;
    return this.http.get<RecheckResult>(url);
  }

  affirm(outboundIds:number[]){
      let url = this.recheckUrl+this.affirmUrl;
      url = url+"?operatorUserName=rickli";
      console.log(url);
      return this.http.post(url,outboundIds);  
  }
}
