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
  private listUrl="list";

  constructor(private http: HttpClient) {

  }

  getRoleNav(userid: string): Observable<Menu[]> {
    let url = this.navUrl+this.navRoleUrl;
    return this.http.get<Menu[]>(url);
  }

  getList():any{
    let url = this.roleUrl+this.listUrl;
    return this.http.get(url);
  }
}
