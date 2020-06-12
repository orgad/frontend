import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  constructor() { }
  
  get(code){
    let val = localStorage.getItem(code);
    return val;
  }

  set(code,value){
    localStorage.setItem(code,value);
  }
}
