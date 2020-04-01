import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsnService {

  /*根路径*/
  private asnUrl = '/api/in/asn';
  private asnList = '/list';
  private asnAdd = '?operatorUserName=rickli';
  private asnUpdate="";
  private asnDetails = '/details';
  private asnUpload='/importdetail';
  private asnDown = "/download/";
  private asnaffirm = '/affirm?operatorUserName=rickli';
  private asncheck = '/check-affirm?operatorUserName=rickli';

  constructor(private http: HttpClient) { }

  getAsnList(pageIndex:number,queryString:string): Observable<AsnModelResult> {
    var url = this.asnUrl + this.asnList;
    url += "?pageIndex="+pageIndex+""+ queryString;
    return this.http.get<AsnModelResult>(url);
  }

  getAsn(id: number): Observable<AsnResult> {
    var url = this.asnUrl + this.asnDetails + "/" + id;
    return this.http.get<AsnResult>(url);
  }

  setAsn(asn:AsnModel) {
    var url = this.asnUrl + this.asnAdd;
    return this.http.post(url, asn);
  }

  updateAsn(asn:AsnModel)
  {
    var url = this.asnUrl + this.asnUpdate;
    return this.http.put(url, asn);
  }

  getUploadUrl():string{
    return this.asnUrl + this.asnUpload;
  }

  download(id:number)
  {
      var url = this.asnUrl + this.asnDetails + this.asnDown + id;       
      return this.http.get(url,{ responseType: "blob"});
  }

  //到货确认
  affirmAsn(ids:number[]):Observable<BatchResponse[]>
  {
    var url = this.asnUrl + this.asnaffirm;
    return this.http.put<BatchResponse[]>(url, ids);
  }
  
  //验货确认
  checkAsn(ids:number[]):any
  {
    var url = this.asnUrl + this.asncheck;
    return this.http.put(url, ids);
  }
}
