import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'account', loadChildren: 'app/account/account.module#AccountModule'},
  {path: 'catalog', loadChildren: 'app/catalog/catalog.module#CatalogModule'},
  {path: 'home', component: MainComponent },
];


export const routing = RouterModule.forRoot(APP_ROUTES);
