import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authUrl = "/api/auth/";
  private loginUrl = "login";

  constructor(private http: HttpClient) { }

  public LogIn(username: string, password: string): any {
    let url = this.authUrl + this.loginUrl;
    return this.http.post(url, { username: username, password: password });
  }
}
