import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmplService {
  tmplUrl = "/api/basic/tmpl/print/";
  query = "query?"
  list = "list";
  details = "/details";
  tmplData = "/tmpl-data";
  updatetmplDataUrl = "/update-tmpl-data";

  constructor(private http: HttpClient) { }

  getList(): Observable<PrintTmplModelResult> {
    let url = this.tmplUrl + this.list;
    return this.http.get<PrintTmplModelResult>(url);
  }

  getDetails(id: number): Observable<PrintTmplDetails> {
    let url = this.tmplUrl + id + this.details;
    return this.http.get<PrintTmplDetails>(url);
  }

  getTmplById(tmplId: number): any {
    let url = this.tmplUrl + tmplId + this.tmplData;
    return this.http.get(url);
  }

  updateTmplData(detailId: number, data: string): any {
    let url = this.tmplUrl + detailId + this.updatetmplDataUrl;
    return this.http.put(url, { data: data });
  }

  getTmpls(query: QueryPrint): any {

    let whId = query.whId;
    let custId = query.custId;
    let brandId = query.brandId;
    let typeCode = query.typeCode;
    let subTypeCode = query.subTypeCode;

    let url = this.tmplUrl + this.query+
      "whId=" + whId + "&" +
      "custId=" + custId + "&" +
      "brandId=" + brandId + "&" +
      "typeCode=" + typeCode + "&" +
      "subTypeCode=" + subTypeCode
      ;
    return this.http.get(url);
  }

  stringToBase64(data: string): string {
    let encrydata = btoa(unescape(encodeURIComponent(data)));
    return encrydata;
  }

  base64ToString(encryptData: string): string {
    let data = decodeURIComponent(escape(atob(encryptData)));
    return data;
  }

  private test() {
    //在v6.0之前创建Buffer对象直接使用
    //console.log(new Buffer('YWRtaW4=', 'base64').toString());//解码
    //console.log(new Buffer('admin').toString('base64'));//编码

    //后期
    //const buf = Buffer.from('runoob', 'ascii');
    // 输出 72756e6f6f62
    //console.log(buf.toString('hex'));

    // 输出 cnVub29i
    //console.log(buf.toString('base64'));
  }

  getTmpl(): any {
    let url = this.tmplUrl + this.query+ "whid=10001&custid=20001&brandid=30001&&typeCode=Demo&subTypeCode=Demo"
    return this.http.get(url);
  }
}
