import { Injectable, EventEmitter } from '@angular/core';
import { HttpInterceptor } from '../core/http-interceptor';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class AccountService {

    SESSION_URL: string = 'user/session';
    ACCOUNT_ENDPOINT: string = 'user/account';

    isLogout: boolean = false;
    logoutCalled = new EventEmitter<boolean>();

    constructor(private http: HttpInterceptor, private __cookie: CookieService, private router: Router) { }

    register(data: any) {
        return this.http.post(environment.API_URL + this.SESSION_URL + '/signup', data);
    }

    login(data: any) {
        return this.http.post(environment.API_URL + this.SESSION_URL + '/login', data);
    }

    facebookLogin(data: any) {
        return this.http.post(environment.API_URL + this.SESSION_URL + '/facebook-login', data);
    }

    forgotPassword(data: any) {
        return this.http.post(environment.API_URL + this.SESSION_URL + '/forgot-password', data);
    }

    resetPassword(token: string, data: any) {
        return this.http.post(environment.API_URL + this.SESSION_URL + '/reset-password?password_token=' + token, data);
    }

    getProfile() {
        return this.http.get(environment.API_URL + this.ACCOUNT_ENDPOINT + '/profile?expand=country&token=' + environment.API_TOKEN);
    }

    verifyAccount(code: string) {
        return this.http.get(environment.API_URL + this.ACCOUNT_ENDPOINT + '/verify?code=' + code);
    }

    updateProfile(profile: any) {
        return this.http.patch(environment.API_URL + this.ACCOUNT_ENDPOINT + '/update?token=' + environment.API_TOKEN, profile);
    }

    isAuthenticated() {
        let customerToken = this.__cookie.get('customer-token');
        if (customerToken) {
            return true;
        } else {
            return false;
        }
    }
    logout() {
        this.__cookie.remove('customer-token');
        this.isLogout = true;
        this.logoutCalled.emit(this.isLogout);
        this.router.navigate(['/account/login']);
    }

}
