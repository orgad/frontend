import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http:HttpClient) { }

  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(filename, {responseType: 'text'})
      .pipe(
        tap( 
              // Log the result or error
          data => {
                    //this.log(filename, data)
                  },
          error => {
            //this.logError(filename, error)
          }
        )
      );
  }

  getT()
  {
    return this.http.get("mock-data/waybill.txt",{responseType: 'text'});
  }
}
