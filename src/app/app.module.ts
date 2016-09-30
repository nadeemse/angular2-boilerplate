import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CmsPageComponent } from './cms-page/cms-page.component';
import { CoreModule } from './core.module';
import { CategoriesService } from './core/services/categories.service';
import { ProductsService } from './core/services/products.service';
import { AccountService } from './core/services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    CmsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    CoreModule
  ],
  providers: [CategoriesService, ProductsService, AccountService, { provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
