import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainComponent },
];


export const routing = RouterModule.forRoot(APP_ROUTES);
