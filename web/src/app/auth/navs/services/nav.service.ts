import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private url = "api/auth/nav/";
  private listUrl = "list";
  private createUrl = "create";
  private details = "/nav-action-list";

  constructor(private http: HttpClient) { }

  getList(pageIndex: number): any {
    const url = this.url + this.listUrl + "?pageIndex=" + pageIndex;
    return this.http.get(url);
  }

  getDetails(id: number): any {
    const url = this.url + id + this.details;
    return this.http.get(url);
  }
}
