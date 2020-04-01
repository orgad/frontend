import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RcvService {

  private rcvUrl = '/api/in/inbound/opt';
  private list = "/list";

  constructor(private http: HttpClient) {

  }

  getRcv(code: string, page: number): Observable<RcvModelResult> {
    var url = this.rcvUrl + this.list + "?page=" + page;
    if (code != ""&&code!=null) {
      url += "&code=" + code;
    }
    return this.http.get<RcvModelResult>(url);
  }
}
