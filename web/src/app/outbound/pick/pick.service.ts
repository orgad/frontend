import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PickService {

  constructor(private http: HttpClient) { }

  private pickUrl = "/api/out/pck/";
  private list = "list";
  private details = "/details";
  private affirmUrl = "affirm";
  private printUrl = "/print";

  getList(page: number, waveid: number): Observable<PickingModelReuslt> {
    let url = this.pickUrl + this.list + "?page=" + page;
    if (waveid != undefined) {
      url = url + "&waveid=" + waveid;
    }
    return this.http.get<PickingModelReuslt>(url);
  }

  getDetails(id: number): Observable<PickingResult> {
    let url = this.pickUrl + id + this.details;
    return this.http.get<PickingResult>(url);
  }

  affirm(ids: number[]): Observable<BatchResponse[]> {
    let url = this.pickUrl + this.affirmUrl;
    return this.http.put<BatchResponse[]>(url, ids);
  }

  getPrint(id: number): Observable<PickingPrint> {
    let url = this.pickUrl + id + this.printUrl;
    return this.http.get<PickingPrint>(url);
  }

  getPrints(ids: number[]): Observable<PickingPrint> {
    let url = this.pickUrl + this.printUrl;
    return this.http.put<PickingPrint>(url, ids);
  }
}