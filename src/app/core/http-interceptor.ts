
import { Http, Request, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend, Headers} from '@angular/http';
import { Router } from '@angular/router';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { ToasterService } from '../core/toaster/toaster.service';
import { Toaster } from '../core/toaster/toaster';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class HttpInterceptor extends Http {

    constructor(backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private _router: Router,
    public toasterServ: ToasterService,
    private __cookieService: CookieService ) {
        super(backend, defaultOptions);
    };

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, options));
    };

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.get(url, this.getRequestOptionArgs(options)));
    };

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
    };

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
    };

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, options));
    };

    getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
           options.headers = new Headers({
                    'Content-Type': 'application/json',
                    'x-api-ns': 'v1'
                });
        }

        let customerToken = this.__cookieService.get('customer-token');
        if(customerToken) {
            options.headers.append('customer-token', customerToken);
        }
        options.headers.append('token', '4bc5bc2eb8881ed5be34d77989b5e447e1199750');
        return options;
    };

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch((error, source) => {
            let errors: any = error.json();
            if(error.status === 422) {
                for(let i =0; i < errors.length; i++) {
                        const toastData = new Toaster(errors[i].field, 'error', errors[i].message);
                        this.toasterServ.emitEvent(toastData);
                }
                return Observable.empty();
            } else if(error.status === 401) {
                console.log(error);
                return Observable.empty();
            } else {
                return Observable.throw(error);
            }
        });

    }
};