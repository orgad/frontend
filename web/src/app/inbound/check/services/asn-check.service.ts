import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsnCheckService {

  private asnCheckUrl: string = "/api/in/asn/check";
  private list: string = "/asn-check-list";
  private details: string = "/details/";
  private update: string = "/asn-check-update-pc";
  private checkUrl: string = "/check-affirm";

  constructor(private http: HttpClient) { }

  public getList(page:number,code: string): Observable<AsnCheckModelResult> {
    var url = this.asnCheckUrl + this.list +"?page="+page;
    if (code != null && code != null && code != "undefined") {
      url = url + "&code=" + code;
    }
    return this.http.get<AsnCheckModelResult>(url);
  }

  public getDetails(id: number): Observable<AsnCheckResult> {
    var url = this.asnCheckUrl + "/" + id + this.details;
    return this.http.get<AsnCheckResult>(url);
  }

  public checks(ids:number[])
  {
    var url = this.asnCheckUrl + this.checkUrl;
    return this.http.post(url, ids);
  }
}
