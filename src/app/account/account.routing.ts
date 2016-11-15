import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { SignupComponent } from '../account/signup/signup.component';
import { LoginComponent } from '../account/login/login.component';
import { ForgotPasswordComponent } from '../account/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../account/reset-password/reset-password.component';

import { AuthGuard } from '../core/auth.guard';

const ACCOUNT_ROUTES: Routes = [
    {
        path: '', component: AccountComponent, children: [
            { path: '', component: AccountComponent },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'reset-password/:token', component: ResetPasswordComponent },
        ]
    }
];

export const accountRouting = RouterModule.forChild(ACCOUNT_ROUTES);