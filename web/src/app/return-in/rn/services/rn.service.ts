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
  private details = "/details";
  private detailListUrl = "from-express-no";

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

  public getDetails(id:number):any
  {
     let url = this.rnUrl + id +this.details;
    return this.http.get(url);
  }

  public getDetailList(expressno: string): Observable<RnDetail[]> {
    let url = this.rnUrl + this.detailListUrl + "?expressNo=" + expressno;
    return this.http.get<RnDetail[]>(url);
  }
}
