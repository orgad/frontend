import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QcService {
  private qcUrl = '/api/mobile/in/qc/';
  private list = 'list';
  private scan = 'scan';

  constructor(private http: HttpClient) { }

  getList(): Observable<QcModelResult> {
    let url = this.qcUrl + this.list;
    return this.http.get<QcModelResult>(url);
  }

  saveDetail(id: string, barcode: string, qcCode: string):any {
    let url = this.qcUrl + "/" + id + "/" + this.scan;
    return this.http.post(url, { barcode: barcode, qcCode: qcCode });
  }
}
