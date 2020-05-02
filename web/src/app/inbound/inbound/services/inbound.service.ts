import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InboundService {
  private inboundUrl = '/api/in/inbound/';
  private inboundList = 'list';
  private inboundAdd = 'add?operatorUserName=rickli';
  private inboundDetails = 'details/';
  private check = 'check?operatorUserName=rickli';
  private qc = 'qc-check?operatorUserName=rickli';
  private putaway = 'putaway-check?operatorUserName=rickli';

  constructor(private http: HttpClient) { }

  getList(page: number, query:QueryInbound): Observable<InboundModelResult> {
    var url = this.inboundUrl + this.inboundList + "?page=" + page;
    if (query.code != null) url += "code=" + query.code;
    if (query.batchNo != null) url += "&batchNo=" + query.batchNo;
    if (query.transCode != null) url += "&transCode=" + query.transCode;
    return this.http.get<InboundModelResult>(url);
  }

  setInbound(inbound: InboundModel) {
    var url = this.inboundUrl + this.inboundAdd;
    return this.http.post<InboundModelResult>(url, inbound);
  }

  getInbound(id: number): Observable<InboundResult> {
    var url = this.inboundUrl + this.inboundDetails + id;
    return this.http.get<InboundResult>(url);
  }

  checkInbounds(ids: number[]): Observable<BatchResponse[]> {
    var url = this.inboundUrl + this.check;
    return this.http.put<BatchResponse[]>(url, ids);
  }

  qcInbounds(ids: number[]): Observable<BatchResponse[]> {
    var url = this.inboundUrl + this.qc;
    return this.http.put<BatchResponse[]>(url, ids);
  }

  putawayInbounds(ids: number[]): Observable<BatchResponse[]> {
    var url = this.inboundUrl + this.putaway;
    return this.http.put<BatchResponse[]>(url, ids);
  }
}