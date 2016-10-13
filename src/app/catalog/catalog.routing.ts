import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { ProductComponent } from '../catalog/product/product.component';
import { CategoriesComponent } from '../catalog/categories/categories.component';

const CATALOG_ROUTES: Routes = [
    { path: '', component: CatalogComponent, children: [
        { path: '', component: CatalogComponent },
        { path: 'products', component: ProductComponent },
        { path: 'categories', component: CategoriesComponent }
    ]}
];

export const catalogRouting = RouterModule.forChild(CATALOG_ROUTES);