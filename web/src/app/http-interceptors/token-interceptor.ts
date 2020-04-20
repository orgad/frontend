import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import TokenUtil from '../utils/token.util';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private tokenUtil: TokenUtil) { }

    /*  */
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        // Get the auth token from the service.
        if (req.url.indexOf("login") < 0) {
            const authToken = this.tokenUtil.getToken();
            // Clone the request and replace the original headers with
            // cloned headers, updated with the authorization.
            const authReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${authToken}`)
            });

            // send cloned request with header to the next handler.
            return next.handle(authReq);
        }
        else{
            return next.handle(req); 
        }
    }
}