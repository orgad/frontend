import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreQcService {

  private rnUrl = "api/in/pre-qc/";
  private listUrl = "list";
  private detailsUrl = "details";
  private saveUrl = "create-detail-list";
  private affirmUrl = "confirm";

  constructor(private http: HttpClient) { }

  getList(): Observable<PreQcModelResult> {
    let url = this.rnUrl + this.listUrl;
    return this.http.get<PreQcModelResult>(url);
  }

  getDetails(id: number) {
    let url = this.rnUrl + id + "/" + this.detailsUrl;
    return this.http.get(url);
  }

  saveItems(id: number, items: PreQcDetail[]): any {
    let url = this.rnUrl + id + "/" + this.saveUrl;
    return this.http.post(url, items);
  }

  confirm(ids: number[]):any {
    let url = this.rnUrl + this.affirmUrl;
    this.http.put(url, ids)
  }
}
