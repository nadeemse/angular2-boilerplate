import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AccountService {

    BASE_URL: string = 'http://demo9151850.mockable.io';

    headers = new Headers({
          'Content-Type': 'application/json'
    });

   constructor(private http: Http) {}

  LoginUser(body) {

    console.log(body);
    return;
    //return this.http.put( this.BASE_URL + '/login', body, { headers: this.headers});
  }

  signUpUser(body) {
    console.log(body);
    return;
   //return this.http.put( this.BASE_URL + '/login', body, { headers: this.headers});
  }

}
