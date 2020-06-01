import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "api/auth/user/";
  private listUrl = "list";
  private createUrl = "create";

  constructor(private http: HttpClient) { }

  getList(): any {
    const url = this.url + this.listUrl;
    return this.http.get(url);
  }

  setUser(user: User): any {
     const url = this.url + this.createUrl;
     return this.http.post(url,user);
  }
}
