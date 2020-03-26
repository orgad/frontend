import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProdNavListComponent } from './prod-nav-list.component';
import { CatalogListComponent } from 'src/app/product/catalog/pages/catalog-list/catalog-list.component';
import { ProductListComponent } from 'src/app/product/product/pages/product-list/product-list.component';
import { SkuListComponent } from 'src/app/product/sku/pages/sku-list/sku-list.component';
import { BarcodeListComponent } from 'src/app/product/barcode/pages/barcode-list/barcode-list.component';

const routes: Routes = [
    { path: "", component: ProdNavListComponent },
    { path: "prod/catalog", component: CatalogListComponent },
    { path: "prod/product", component: ProductListComponent },
    { path: "prod/sku", component: SkuListComponent },
    { path: "prod/barcode", component: BarcodeListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class ProdNavListRoutingModule { }