import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { SignupComponent } from '../account/signup/signup.component';
import { LoginComponent } from '../account/login/login.component';
import { ForgotPasswordComponent } from '../account/forgot-password/forgot-password.component';
import { ProfileComponent } from '../account/profile/profile.component';

import { AuthGuard } from '../core/auth.guard';

const ACCOUNT_ROUTES: Routes = [
    { path: '', component: AccountComponent, children: [
        { path: '', component: ProfileComponent },
        { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
        { path: 'login', component: LoginComponent },
        { path: 'forgot-password', component: ForgotPasswordComponent },
        { path: 'signup', component: SignupComponent }
    ]}
];

export const accountRouting = RouterModule.forChild(ACCOUNT_ROUTES);