import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "api/auth/user/";
  private listUrl = "list";
  private createUrl = "create";
  private bizlistUrl = "biz-list";
  private userrole = "/user-list";

  constructor(private http: HttpClient) { }

  getList(pageSize: number): any {
    const url = this.url + this.listUrl + "?pageSize=" + pageSize;
    return this.http.get(url);
  }

  setUser(user: User): any {
    const url = this.url + this.createUrl;
    return this.http.post(url, user);
  }

  getBizList(): any {
    let url = this.url + this.bizlistUrl;
    return this.http.get(url);
  }

  getUserList(roleid: number): any {
    let url = this.url + roleid + this.userrole;
    return this.http.get(url);
  }
}
