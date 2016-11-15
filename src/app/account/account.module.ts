import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SweetAlertService } from 'ng2-cli-sweetalert2';

import { AccountComponent } from '../account/account.component';
import { SignupComponent } from '../account/signup/signup.component';
import { LoginComponent } from '../account/login/login.component';
import { ForgotPasswordComponent } from '../account/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../account/reset-password/reset-password.component';
import { ProfileComponent } from '../account/profile/profile.component';

import { accountRouting } from '../account/account.routing';
import { SharedModule } from '../shared/shared.module';
import { FacebookComponent } from './social/facebook.component';

@NgModule({
    declarations: [
        AccountComponent,
        SignupComponent,
        LoginComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        ProfileComponent,
        FacebookComponent
    ],
    imports: [SharedModule, FormsModule, ReactiveFormsModule, accountRouting],
    providers: [SweetAlertService]
})
export class AccountModule {}