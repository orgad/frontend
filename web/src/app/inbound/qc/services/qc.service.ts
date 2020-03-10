import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QcService {

  private qcUrl = '/api/in/qc/';
  private list = "/list";
  private qc ="/";
  private details = "/details";

  constructor(private http: HttpClient) { }

  getQcList():Observable<QcModelResult>
  {
    return this.http.get<QcModelResult>(this.qcUrl+this.list);
  }

  getQc(id:number):Observable<Qc>
  {
    let url = this.qcUrl+this.qc+id;
    return this.http.get<Qc>(url);
  }

  getDetails(id:number):Observable<QcResult>
  {
    let url =  this.qcUrl+ id + this.details;
    return this.http.get<QcResult>(url);
  }
}
