import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RnService {

  private rnUrl = "api/in/rn/";
  private listUrl = "list";
  private createUrl = "create";

  constructor(private http: HttpClient) { }

  public getList(page: number, queryString: string): Observable<RnModelResult> {
    let url = this.rnUrl + this.listUrl;
    return this.http.get<RnModelResult>(url);
  }

  public setRn(rn: RnModel) {
    let url = this.rnUrl + this.createUrl;
    return this.http.post(url, rn);
  }

  public affirmRn(ids: number[]): any {
    return this.http.put(this.rnUrl, ids);
  }

  public checkRn(ids: number[]): any {
    return this.http.put(this.rnUrl, ids);
  }

}
