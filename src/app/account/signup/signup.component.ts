import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Country } from '../../core/models/country';
import { AccountService } from '../account.service';

import { ToasterService } from '../../core/toaster/toaster.service';
import { Toaster } from '../../core/toaster/toaster';

@Component({
  selector: 'barrat-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  countries: Country[];
  genders: any[];
  accountTypes: any[];

  constructor(
    private formBuilder: FormBuilder,
    public account: AccountService,
    private router: Router,
    public toasterServ: ToasterService
    ) {}

  ngOnInit() {

      this.genders = [
        {
          id: 1,
          code: 'male',
          title: 'Male'
        },
        {
          id: 2,
          code: 'female',
          title: 'Female'
        }
      ];

      this.accountTypes = [
        {
          id: 1,
          code: 'seller',
          title: 'Seller'
        },
        {
          id: 2,
          code: 'customer',
          title: 'Customer'
        }
      ];

    this.initForm();
  }

  private initForm() {
    
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      confirm_email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: ['', Validators.required],
      country: ['', Validators.required],
      gender: ['', Validators.required],
      amazing_offers: true,
      occasional_updates: true,
      dob: ''
    });
  }
  onSubmit() {
    this.account.register(this.registerForm.value).subscribe(
      (response: any) => {
        const data = response.json();
        const toastData = new Toaster(
          'success',
          'success',
          'Dear Customer your account has been created please check your email for further instruction');
        this.toasterServ.emitEvent(toastData);

        this.router.navigate(['/account', 'login']);
      }
    );
  }

}
