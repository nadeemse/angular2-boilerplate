import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Facebook } from '../social/facebook';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AccountService } from '../account.service';

declare const FB: any;

@Component({
  selector: 'barrat-facebook',
  templateUrl: './facebook.component.html'
})
export class FacebookComponent implements OnInit {

  fbData: any;
  constructor( public account: AccountService,
    private router: Router,
    private __cookieService: CookieService) {
        FB.init({
            appId      : 'YOUR_APP_ID',
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.7' // use graph api version 2.5
        });
    }

    statusChangeCallback(resp) {

        if (resp.status === 'connected') {
            this.fbProfile();
        } else if (resp.status === 'not_authorized') {

        } else {
        }
    }

    onFacebookLoginClick() {
      FB.login();
    }

  ngOnInit() {

      this.account.logoutCalled.subscribe(
        (isLogout: boolean) => {
          console.log(isLogout, 'I am insie Logout');
          //this.fbLogout();
        }
      );

      FB.getLoginStatus(response => {
          this.statusChangeCallback(response);
      });
  }

  fbProfile() {
    FB.api('/me?fields=email,name,id,gender, first_name, last_name, location, hometown', response =>  {
      this.facebookLogin(response);
    });
  }

  fbLogout() {
    FB.logout(function(response) {
      // Person is now logged out
      this.router.navigate(['/account', 'login']);
    });
  }

  facebookLogin(response) {
      this.fbData = response;
        const data = new Facebook(this.fbData.email,
          this.fbData.first_name,
          this.fbData.last_name,
          this.fbData.gender,
          this.fbData.dob,
          'facebook',
          this.fbData.id
        );
        this.account.facebookLogin(data).subscribe(
          (response: any) => {
            const data = response.json();
            this.__cookieService.put('customer-token', data.auth_key);
            this.router.navigate(['/account', 'profile']);
          }
        );
  }

}
