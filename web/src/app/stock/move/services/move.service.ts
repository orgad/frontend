import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private moveUrl ="/api/stock/move/";
  private list="list";
  private add="create";

  constructor(private http:HttpClient) { }

  public getList():Observable<MoveModelResult>
  {
     let url = this.moveUrl+this.list;
     return this.http.get<MoveModelResult>(url);
  }

  public create(moveAdd:MoveAddForm):any
  {
    let url = this.moveUrl+this.add;
    return this.http.post(url,moveAdd);
  }
}
