import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private navUrl = "/api/auth/nav/";
  private navRoleUrl = "role-list";

  private roleUrl = "/api/auth/role/";
  private rolelistUrl = "role-list";
  private bizlistUrl = "biz-list";

  constructor(private http: HttpClient) {

  }

  getRoleNav(userid: string): Observable<Menu[]> {
    /*获得当前账号的菜单*/
    let url = this.navUrl + this.navRoleUrl;
    return this.http.get<Menu[]>(url);
  }

  getList(): any {
    let url = this.roleUrl + this.rolelistUrl;
    return this.http.get(url);
  }

  getBizList(): any {
    let url = this.roleUrl + this.bizlistUrl;
    return this.http.get(url);
  }
}
