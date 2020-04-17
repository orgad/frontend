import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RnService {
  private rnUrl = "api/mobile/return-in/";
  private scan = "scan";

  constructor(private http: HttpClient) { }

  saveDetail(courier: string, expressCode: string): any {
    let url = this.rnUrl + this.scan;
    return this.http.post(url, { courier: courier, trackingNo: expressCode });
  }
}
