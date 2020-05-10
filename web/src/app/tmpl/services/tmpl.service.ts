import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class TmplService {

  constructor() { }

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
}
