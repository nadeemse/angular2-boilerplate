import { Component, OnInit, Input } from '@angular/core';

import { Login } from '../../core/models/login';
import { AccountService } from '../../core/services/account.service';


@Component({
  selector: 'barrat-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  @Input() loginModel: Login;

  constructor(private account: AccountService) {}

  ngOnInit() {
    this.loginModel = { userName: null, passWord: null};
  }

  onSubmit(loginData: Login) {
    this.loginModel = loginData;
    this.account.LoginUser(this.loginModel);
  }
}
