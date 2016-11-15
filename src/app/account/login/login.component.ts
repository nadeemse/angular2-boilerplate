import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from '../../core/models/login';
import { AccountService } from '../account.service';

import { ToasterService } from '../../core/toaster/toaster.service';
import { Toaster } from '../../core/toaster/toaster';


@Component({
  selector: 'barrat-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  @Input() loginModel: Login;

  constructor(private account: AccountService,  private toasterService: ToasterService, private router: Router) {}

  ngOnInit() {

    const toastData = new Toaster(
          'success',
          'success',
          'I am working on Login Page');
        this.toasterService.emitEvent(toastData);

    this.loginModel = { userName: null, passWord: null};
  }

  onSubmit(loginData: Login) {
    this.loginModel = loginData;
    this.account.LoginUser(this.loginModel);
    this.router.navigate(['/account/profile']);
  }
}
