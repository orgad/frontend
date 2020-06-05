import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RightService {

  private url = "api/auth/right/";
  private bizlistUrl = "/biz-list";
  private userurl = "/user-list";
  private roleurl = "/role-list";
  private rolenav = "/nav-action-list-by-role";
  private userIdnav = "/user-nav-list";
  private loginNamenav = "/login-nav-list";
  private createuserrole = "/create-user-role";
  private createuserbiz="/create-user-biz";

  constructor(private http: HttpClient) { }

  getBizList(userid: number): any {
    let url = this.url + userid + this.bizlistUrl;
    return this.http.get(url);
  }

  getRoleList(userId: number): any {
    let url = this.url + userId + this.roleurl;
    return this.http.get(url);
  }

  getNavListByUserId(userId: any): any {
    let url = this.url + userId + this.userIdnav;
    return this.http.get(url);
  }

  getNavListByLoginName(loginName: any): any {
    let url = this.url + loginName + this.loginNamenav;
    return this.http.get(url);
  }

  getUserList(roleid: number): any {
    let url = this.url + roleid + this.userurl;
    return this.http.get(url);
  }

  getRoleNavList(roleId: number): any {
    let url = this.url + roleId + this.rolenav;
    return this.http.get(url);
  }

  createUserRole(userId: number, rolelist: any):any {
    let url = this.url + userId + this.createuserrole;
    return this.http.put(url, rolelist);
  }

  createUserBiz(userId: number, rolelist: any):any {
    let url = this.url + userId + this.createuserbiz;
    return this.http.put(url, rolelist);
  }
}