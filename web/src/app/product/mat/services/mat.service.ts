import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatService {

  private prodUrl ="/api/prod/mat/";
  private list ="list";
  private matUrl ="create";

  constructor(private http:HttpClient) { }

  getList():Observable<MatResult>
  {
    const url = this.prodUrl + this.list;
    return this.http.get<MatResult>(url);
  }

  setMat(mat:Mat):any
  {
    const url = this.prodUrl + this.matUrl;
    return this.http.post(url,mat);
  }
}
