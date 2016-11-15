import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

import { AccountService } from '..//account.service';
import { ToasterService } from '../../core/toaster/toaster.service';
import { Toaster } from '../../core/toaster/toaster';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  password_token: string;

  constructor(
    private formBuilder: FormBuilder,
    public account: AccountService,
    private toasterService: ToasterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('token')) {
          this.password_token = params.token;
        } else {
          const toastData = new Toaster(
            'success',
            'success',
            'You are not allowed to perform this action');
          this.toasterService.emitEvent(toastData);
          this.router.navigate(['/account/login']);
        }
      }
    );

    this.resetPasswordForm = this.formBuilder.group({
      password: ['',  Validators.required],
      confirm_password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.account.resetPassword(this.password_token, this.resetPasswordForm.value).subscribe(
      (response: any) => {
        const data = response.json();
        const toastData = new Toaster(
          'success',
          'success',
          data.message);
        this.toasterService.emitEvent(toastData);
        this.router.navigate(['/account/login']);
      }
    );
  }

}
