import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpressService {

  private expressUrl = "/api/out/express/";
  private list = "list";
  private add = "create";
  constructor(private http: HttpClient) { }

  getList(): Observable<ExpressModelResult> {
    const url = this.expressUrl + this.list;
    return this.http.get<ExpressModelResult>(url);
  }

  addExpress(model:ExpressAdd) {
    const url = this.expressUrl + this.add;
    console.log(model,url);
    return this.http.post(url,model);
  }
}