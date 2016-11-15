import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

import { AccountService } from '../account.service';
import { ToasterService } from '../../core/toaster/toaster.service';
import { Toaster } from '../../core/toaster/toaster';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public account: AccountService,
    private toasterService: ToasterService,
    private router: Router
  ) { }

  ngOnInit() {

    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
    });

  }
  onSubmit() {
    this.account.forgotPassword(this.forgotPasswordForm.value).subscribe(
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
  isEmail(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return { noEmail: true };
    }
  }

}
