import { Injectable } from '@angular/core';
import { HttpInterceptor }  from '../../core/http-interceptor';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class AccountService {

  SESSION_URL: string = 'http://example.com/v1/user/session';
  ACCOUNT_ENDPOINT: string = 'http://example.com/v1/user/account';
  constructor(private http: HttpInterceptor, private __cookie: CookieService, private router: Router) {}

  LoginUser(body) {

    console.log(body);
     this.__cookie.put('customer-token', '1234487sjhkjhdsjyyshjkfsy8sydsidhisuhdiush'); // This will be dynamic from server 
    return;
  }

  signUpUser(body) {
    console.log(body);
    return;
  }

  forgotPassword(data: any) {
     return this.http.post(this.SESSION_URL + '/forgot-password', data);
  }
  getProfile() {
      return this.http.get(this.ACCOUNT_ENDPOINT + '/profile');
  }
  isAuthenticated() {
    let customerToken = this.__cookie.get('customer-token');
    if(customerToken) {
        return true;
    } else {
      return false;
    }
  }
  logout() {
    this.__cookie.remove('customer-token');
    this.router.navigate(['/account/login']);
  }

}
