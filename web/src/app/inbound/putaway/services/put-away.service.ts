import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PutAwayService {

  private putAwayUrl = '/api/in/putaway/';
  private list = "list";
  private details = "details";
  private affirm = "confirm";
  private printUrl = "/print-list";

  constructor(private http: HttpClient) { }

  getAdviceList(): Observable<PutAwayAdviceModelResult> {
    return this.http.get<PutAwayAdviceModelResult>(this.putAwayUrl + this.list);
  }

  getPutAwayList(transCode: string) {
    let url = this.putAwayUrl + this.list + "?transCode=" + transCode;
    return this.http.get<PutAwayModelResult>(url);
  }

  getPrintList(id: number): any {
    let url = this.putAwayUrl + id + this.printUrl;
    return this.http.get(url);
  }

  getDetails(id: number): Observable<PutAwayResult> {
    let url = this.putAwayUrl + id + "/" + this.details;
    return this.http.get<PutAwayResult>(url);
  }

  checks(ids: number[]): any {
    let url = this.putAwayUrl + this.affirm;
    return this.http.put<PutAwayResult>(url, ids);
  }
}
