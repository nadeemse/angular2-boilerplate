import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../../account/account.service';

@Component({
  selector: 'barrat-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }
  isAuth() {
    return this.accountService.isAuthenticated();
  }
  onLogout() {
   this.accountService.logout();
   this.router.navigate(['/account/login']);
  }

}
