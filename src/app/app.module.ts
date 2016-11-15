import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpModule,
  XHRBackend,
  RequestOptions} from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

import { routing } from './app.routing';
import { HttpInterceptor }  from './core/http-interceptor';
import { AuthGuard } from './core/auth.guard';

import {ToastyModule} from 'ng2-toasty';

import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ToasterComponent } from './core/toaster/toaster.component';


import { CategoriesService } from './catalog/categories.service';
import { ProductsService } from './catalog/products.service';
import { AccountService } from './account/account.service';

import { ToasterService } from './core/toaster/toaster.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToasterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    CoreModule,
    ToastyModule.forRoot()
  ],
  providers: [ AuthGuard, CookieService, ToasterService, CategoriesService, ProductsService, AccountService, { 
    provide: HttpInterceptor,
    useFactory: (backend: XHRBackend,
    options: RequestOptions,
    router: Router,
    toasterServ: ToasterService,
    __cookieService: CookieService) => {
      return new HttpInterceptor(backend, options, router, toasterServ, __cookieService);
    },
    deps: [XHRBackend, RequestOptions, Router, ToasterService, CookieService ]
  }, 
  { provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
