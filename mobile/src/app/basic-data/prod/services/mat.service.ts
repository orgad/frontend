import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatService {

  private baseUrl:string = "/api/mobile/prod/mat/";

  urls = "upload"; //图片上传

  constructor(private http:HttpClient) { }

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
