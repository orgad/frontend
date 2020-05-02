import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HandOverService {

  private handOverUrl = "/api/out/handover/";
  private list = "list";
  private one = "";
  private details = "/details?operatorUserName=rickli&HId="
  private addUrl="create";
  private affirmUrl ="/affirm"
  private create = "createbyids";

  constructor(private http: HttpClient) { }

  getList(pageIndex: number): Observable<HandOverModelResult> {
    let url = this.handOverUrl + this.list;
    url = url + "?page=" + pageIndex;
    return this.http.get<HandOverModelResult>(url);
  }

  getOne(id:number):Observable<HandOverResult>
  {
    let url = this.handOverUrl + this.one + id;
    return this.http.get<HandOverResult>(url);
  }

  getDetails(id:number): Observable<HandOverResult> {
    let url = this.handOverUrl  + id + this.details;
    return this.http.get<HandOverResult>(url);
  }

  add(hd:HandOver)
  {
    let url = this.handOverUrl + this.addUrl;
    return this.http.post<HandOverResult>(url,hd);
  }

  affirm(ids:number[])
  {
    let url = this.handOverUrl + this.affirmUrl;
    return this.http.put(url,ids);
  }

  postGen(outboundIds:number[]):Observable<HandOverModelResult>{
      let url = this.handOverUrl+this.create + outboundIds;
      url = url+"?operatorUserName=rickli";
      return this.http.post<HandOverModelResult>(url,outboundIds);  
  }
}
