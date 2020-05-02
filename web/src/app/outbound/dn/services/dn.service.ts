import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DnService {

  private dnUrl = "/api/out/dn/";
  private list = "list";
  private details = "/details";
  private addUrl = "";
  private dnUpload = 'importdetail';
  private updateUrl = "update";
  private affirmUrl = "affirm";

  constructor(private http: HttpClient) { }

  getList(page: number): Observable<DnModelResult> {
    let url = this.dnUrl + this.list + "?page=" + page;
    return this.http.get<DnModelResult>(url);
  }

  getDetails(id: number): Observable<DnResult> {
    let url = this.dnUrl + id + this.details;
    return this.http.get<DnResult>(url);
  }

  add(o: DnModel) {
    let url = this.dnUrl + this.addUrl;
    return this.http.post(url, o);
  }

  update(o: DnModel) {
    let url = this.dnUrl + this.updateUrl;
    return this.http.put(url, o);
  }

  getUploadUrl(): string {
    return this.dnUrl + this.dnUpload;
  }

  affirm(ids: number[]): Observable<BatchResponse[]> {
    let url = this.dnUrl + this.affirmUrl;
    return this.http.put<BatchResponse[]>(url, ids);
  }
}
