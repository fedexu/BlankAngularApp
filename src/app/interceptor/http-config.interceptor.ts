import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor() { }
    
    // Generic handling of all http request, if any generic header security or error behavior is required
    // the place to be handled is here.
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let cloned = request.clone();

        return next.handle(cloned).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.info('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    error: error,
                    status: error.status,
                    url: cloned.urlWithParams,
                    method: cloned.method,
                    body: cloned.body,
                    timestamp: error && error.error.timestamp ? error.error.timestamp : Date.now()
                };
                console.error(data);
                return throwError(error);
            }));
    }
}