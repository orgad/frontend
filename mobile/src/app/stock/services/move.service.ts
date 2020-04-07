import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  private moveUrl ="/api/mobile/stock/move/";
  private list="task-list";
  private moveDown="/move-down";
  private moveUp="/move-up";

  constructor(private http:HttpClient) { }

  public getList():Observable<MoveModelResult>
  {
     let url = this.moveUrl+this.list;
     return this.http.get<MoveModelResult>(url);
  }

  public saveDetail(moveId:string,typecode:string, carton:string, binCode:string,barcode:string):any
  {
    let url = this.moveUrl+moveId;
    if(typecode=="up") url+="/"+this.moveUp;
    if(typecode=="down") url+="/"+this.moveDown;

    return this.http.post(url,{carton:carton,toBinCode:binCode,barcode:barcode});
  }
}
