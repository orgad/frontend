import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsnCheckService {
  
  private baseUrl:string = "/api/mobile/in/asn/check/";

  urls = "detail-list-upload/"; //图片上传
  list : string = "asn-check-task-list";
  // url = "/detail-upload";

  constructor(private http: HttpClient) { }

  getList():Observable<AsnCheckModelResult>{
    let url = this.baseUrl + this.list;
    return this.http.get<AsnCheckModelResult>(url);
  }

  get(id:number):Observable<AsnCheck>{
    let url = this.baseUrl+id;
    return this.http.get<AsnCheck>(url);
  }

  update(id:number,data:any){
    let url = this.baseUrl+"update/"+id;
    return this.http.put(url,data);
  }

  Save(id:number,barcode:string,files: any[]) {
    let url = this.baseUrl + id + "/" + this.urls;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i] as any, files[i].name);
    }
    formData.append('barcode', barcode);
    return this.http.post(url, formData);
  }
}
