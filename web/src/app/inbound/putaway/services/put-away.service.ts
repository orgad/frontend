import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PutAwayService {

  private putAwayUrl = '/api/in/putaway/';
  private list = "list";
  private details="details";

  constructor(private http: HttpClient) { }

  getPutAwayList()
  {
    return this.http.get<PutAwayModelResult>(this.putAwayUrl+this.list);
  }

  getDetails(id:number):Observable<PutAwayResult>
  {
    let url = this.putAwayUrl+ id + "/" + this.details;
    return this.http.get<PutAwayResult>(url);
  }
}
