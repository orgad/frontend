import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptLogService {

  private logUrl = '/api/in/inbound/logs/opt';
  private list = "/list";

  constructor(private http: HttpClient) {

  }

  getList(code: string, page: number): Observable<OptLogModelResult> {
    var url = this.logUrl + this.list + "?page=" + page;
    if (code != ""&&code!=null) {
      url += "&code=" + code;
    }
    return this.http.get<OptLogModelResult>(url);
  }
}
