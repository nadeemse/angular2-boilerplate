import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AccountService } from '../account.service';

@Component({
  selector: 'barrat-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public account: AccountService,
    private router: Router,
    private __cookieService: CookieService
    ) {}

  ngOnInit() {
    let customerKey: string = this.__cookieService.get('customer-token');
    if(customerKey) {
        this.router.navigate(['/account', 'profile']);
    }
    this.initForm();
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: false
    });
  }

   onSubmit() {
    const loginFormData = this.loginForm.value;
    this.account.login(loginFormData).subscribe(
      (response: any) => {
        const data = response.json();
        this.__cookieService.put('customer-token', data.auth_key);
        this.router.navigate(['/account', 'profile']);
      }
    );
  }

}
