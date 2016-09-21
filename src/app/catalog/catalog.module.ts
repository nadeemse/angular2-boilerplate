import { NgModule } from '@angular/core';

import { CatalogComponent } from './catalog.component';
import { ProductComponent } from '../catalog/product/product.component';
import { CategoriesComponent } from '../catalog/categories/categories.component';

import { catalogRouting } from '../catalog/catalog.routing';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CatalogComponent,
        ProductComponent,
        CategoriesComponent
    ],
    imports: [SharedModule, catalogRouting]
})
export class CatalogModule {}