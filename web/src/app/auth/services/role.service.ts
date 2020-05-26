import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  url = "/api/auth/nav/role-list";

  constructor(private http: HttpClient) {

  }

  getRoleNav(userid: string): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.url);
  }
}
