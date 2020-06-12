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
  private createuserbiz = "/create-user-biz";
  private createrolnav = "/create-role-nav";
  private role_nav_actionlist = "/action-list";
  private role_nav_actionlist2 = "/actions-list";
  private auth = "auth-list?loginName=";

  constructor(private http: HttpClient) { }

  getAuthDetails(loginName: string): any {
    let url = this.url + this.auth + loginName;
    return this.http.get(url);
  }

  getNavListByUserId(userId: any): any {
    /*根据用户获得菜单*/
    let url = this.url + userId + this.userIdnav;
    return this.http.get(url);
  }

  getNavListByLoginName(loginName: any): any {
    /*根据用户登录名获得菜单*/
    let url = this.url + loginName + this.loginNamenav;
    return this.http.get(url);
  }

  getBizList(userid: number): any {
    /*根据用户获得业务权限 */
    let url = this.url + userid + this.bizlistUrl;
    return this.http.get(url);
  }

  getRoleList(userId: number): any {
    /*根据用户获得角色权限 */
    let url = this.url + userId + this.roleurl;
    return this.http.get(url);
  }

  getUserList(roleid: number): any {
    /*根据角色获得用户*/
    let url = this.url + roleid + this.userurl;
    return this.http.get(url);
  }

  getRoleNavList(roleId: number): any {
    /*根据角色获得菜单*/
    let url = this.url + roleId + this.rolenav;
    return this.http.get(url);
  }

  getNavActionByLoginName(loginName: string): any {
    /*根据登录名和菜单获得操作按钮*/
  }

  getNavActionByRoleNav(roleid: number, navid: number): any {
    /*根据角色和菜单获得操作按钮*/
    let url = this.url + roleid + "/" + navid + this.role_nav_actionlist;
    return this.http.get(url);
  }

  getNavActionByRolesNav(roleids: string, navid: number): any {
    /*根据角色和菜单获得操作按钮*/
    /*roleids : 逗号分割*/
    let url = this.url + roleids + "/" + navid + this.role_nav_actionlist2;
    return this.http.get(url);
  }

  createRoleNav(roleId: number, moduleId: number, navs: RoleNav[]): any {
    /*创建角色和菜单的关系*/
    let url = this.url + roleId + this.createrolnav + "?moduleId=" + moduleId;
    return this.http.put(url, navs);
  }

  createUserRole(userId: number, rolelist: any): any {
    /*创建用户和角色的关系*/
    let url = this.url + userId + this.createuserrole;
    return this.http.put(url, rolelist);
  }

  createUserBiz(userId: number, rolelist: any): any {
    /*创建用户和业务权限的关系*/
    let url = this.url + userId + this.createuserbiz;
    return this.http.put(url, rolelist);
  }


}