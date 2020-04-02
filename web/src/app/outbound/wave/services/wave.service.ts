import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaveService {

  constructor(private http: HttpClient) { }

  private waveUrl = "/api/out/wave/";
  private list = "list";
  private create = "create";
  private confirm = "affirm";

  getList(page: number, id: number): Observable<WaveModelResult> {
    let url = this.waveUrl + this.list + "?page=" + page;
    return this.http.get<WaveModelResult>(url);
  }

  createWave(custId: number): Observable<WaveModelResultList> {
    let url = this.waveUrl + this.create;
    return this.http.post<WaveModelResultList>(url, custId)
  }

  affirm(ids: number[]): Observable<BatchResponse[]> {
    let url = this.waveUrl + this.affirm;
    return this.http.put<BatchResponse[]>(url, ids)
  }
}
