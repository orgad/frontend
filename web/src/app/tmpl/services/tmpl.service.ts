import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmplService {

  url = "whid=10001&custid=20001&brandid=30001"
  tmplUrl = "/api/basic/tmpl/print/query?";

  constructor(private http: HttpClient) { }

  private do() {
    //在v6.0之前创建Buffer对象直接使用
    console.log(new Buffer('YWRtaW4=', 'base64').toString());//解码
    console.log(new Buffer('admin').toString('base64'));//编码

    //后期
    const buf = Buffer.from('runoob', 'ascii');
    // 输出 72756e6f6f62
    console.log(buf.toString('hex'));

    // 输出 cnVub29i
    console.log(buf.toString('base64'));
  }

  getTmpl(): any {
    return this.http.get(this.url);
  }

  getTmpls(query: QueryPrint): any {

    let whId = query.whId;
    let custId = query.custId;
    let brandId = query.brandId;
    let typeCode = query.typeCode;
    let subTypeCode = query.subTypeCode;

    let url = this.tmplUrl +
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
    console.log(encrydata, "stringToBase64");
    return encrydata;
  }

  base64ToString(encryptData: string): string {
    let data = decodeURIComponent(escape(atob(encryptData)));
    console.log(data, 'base64ToString');
    return data;
  }
}
