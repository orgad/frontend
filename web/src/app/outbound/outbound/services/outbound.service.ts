import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutboundService {

  private outboundUrl = "/api/out/outbound/";
  private list = "list";
  private details = "/details";
  private create ="create/";
  private alotUrl = "alot";
  private waveUrl = "wave";
  private pickUrl = "pick";

  constructor(private http: HttpClient) { }

  getList(pageIndex: number): Observable<OutboundModelResult> {
    let url = this.outboundUrl + this.list;
    url = url + "?page=" + pageIndex;
    console.log(url);
    return this.http.get<OutboundModelResult>(url);
  }

  getDetails(id:number): Observable<OutboundResult> {
    let url = this.outboundUrl + id + this.details;
    return this.http.get<OutboundResult>(url);
  }

  set(dnIds:number[]):Observable<OutboundModelResultList>{
      let url = this.outboundUrl+this.create;
      url = url+"?operatorUserName=rickli";
      console.log(url);
      return this.http.post<OutboundModelResultList>(url,dnIds);  
  }

  alot(ids:number[]):Observable<BatchResponse[]>
  {
    const url =this.outboundUrl + this.alotUrl + "?operatorUserName=rickli";
    return this.http.put<BatchResponse[]>(url,ids);
  }

  wave(ids:number[]):Observable<BatchResponse[]>
  {
    const url =this.outboundUrl + this.waveUrl + "?operatorUserName=rickli";
    return this.http.put<BatchResponse[]>(url,ids);
  }

  pick(ids:number[]):Observable<BatchResponse[]>
  {
    const url =this.outboundUrl + this.pickUrl + "?operatorUserName=rickli";
    return this.http.put<BatchResponse[]>(url,ids);
  }
}
