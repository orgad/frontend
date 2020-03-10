import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaService {
  private paUrl = '/api/mobile/in/putaway/';
  private list = 'list';
  private scan = 'scan';
  constructor(private http: HttpClient) { }

  getList(): Observable<PaModelResult> {
    let url = this.paUrl + this.list;
    return this.http.get<PaModelResult>(url);
  }

  saveDetail(id:string,carton:string,barcode:string,binCode:string):any
  {
    let url = this.paUrl +"/"+id+"/" + this.scan;
    return this.http.post(url,{carton:carton,barcode:barcode,binCode:binCode});
  }
}
