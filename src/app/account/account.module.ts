import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AccountComponent } from '../account/account.component';
import { SignupComponent } from '../account/signup/signup.component';
import { LoginComponent } from '../account/login/login.component';
import { ForgotPasswordComponent } from '../account/forgot-password/forgot-password.component';
import { ProfileComponent } from '../account/profile/profile.component';

import { accountRouting } from '../account/account.routing';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        AccountComponent,
        SignupComponent,
        LoginComponent,
        ForgotPasswordComponent,
        ProfileComponent
    ],
    imports: [SharedModule, FormsModule, ReactiveFormsModule, accountRouting]
})
export class AccountModule {}