import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import TokenUtil from '../utils/token.util';
import { NzMessageService } from 'ng-zorro-antd';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    i: number = 0;
    constructor(private tokenUtil: TokenUtil,private message:NzMessageService) {

    }

    /*  */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let ok: string;

        // Get the auth token from the service.
        this.i++;

        if (req.url.indexOf("login") < 0) {
            const authToken = this.tokenUtil.getToken();
            // Clone the request and replace the original headers with
            // cloned headers, updated with the authorization.
            const authReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${authToken}`)
            });

            // send cloned request with header to the next handler.
            return next.handle(authReq).pipe(
                //tap(_ => this.log(req.url, "any")),
                catchError(this.handleError<any>(req.url, []))
            );
        }
        else {
            return next.handle(req).pipe(
                catchError(this.handleError<any>(req.url, [])),
                tap(
                    // Succeeds when there is a response; ignore other events
                    event => {
                        ok = event instanceof HttpResponse ? 'succeeded' : 'initial';
                        //this.log(ok,"ok");
                    },
                    // Operation failed; error is an HttpErrorResponse
                    error=>(e)=> {
                        ok = 'failed';
                        this.log(ok, e+"failed");
                    },
                )
            );
        }
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
    */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error, "error"); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`, "error");

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string, title?: string) {

        //console.log(message, title);
        this.message.error(message);
    }
}