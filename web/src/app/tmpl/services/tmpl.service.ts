import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmplService {
  tmplUrl = "/api/basic/tmpl/";

  query = "query?"
  list = "list";
  details = "/details";
  tmplData = "/tmpl-data";
  updatetmplDataUrl = "/update-tmpl-data";

  print_url = "print/"
  imp_list = "import/";

  constructor(private http: HttpClient) { }

  getPrintList(): Observable<PrintTmplModelResult> {
    let url = this.tmplUrl + this.print_url + this.list;
    return this.http.get<PrintTmplModelResult>(url);
  }

  getImpList(): Observable<ImportTmplModelResult> {
    let url = this.tmplUrl + this.imp_list + this.list;
    return this.http.get<ImportTmplModelResult>(url);
  }

  getPrintDetails(id: number): Observable<PrintTmplDetails> {
    let url = this.tmplUrl + this.print_url + id + this.details;
    return this.http.get<PrintTmplDetails>(url);
  }

  getPrintTmplById(tmplId: number): any {
    let url = this.tmplUrl + this.print_url + tmplId + this.tmplData;
    return this.http.get(url);
  }

  updatePrintTmplData(detailId: number, data: string): any {
    let url = this.tmplUrl + this.print_url + detailId + this.updatetmplDataUrl;
    return this.http.put(url, { data: data });
  }

  getPrintTmpls(query: QueryPrint): any {

    let whId = query.whId;
    let custId = query.custId;
    let brandId = query.brandId;
    let typeCode = query.typeCode;
    let subTypeCode = query.subTypeCode;

    let url = this.tmplUrl + this.print_url+ this.query +
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

  getPrintTmpl(): any {
    let url = this.tmplUrl + this.query + "whid=10001&custid=20001&brandid=30001&&typeCode=Demo&subTypeCode=Demo"
    return this.http.get(url);
  }
}
