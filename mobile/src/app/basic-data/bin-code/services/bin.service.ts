import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BinService {

  private whUrl = "api/wh/bin/";
  private list = "list";
  private create = "create";

  constructor(private http: HttpClient) {

  }

  setBin(bin: BinModel) {
    let url = this.whUrl + this.create
    return this.http.post(url, bin);
  }
}
