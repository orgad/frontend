import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { QueryNavListComponent } from './query-nav-list.component';
import { InvtByBarcodeComponent } from '../invt-by-barcode/invt-by-barcode.component';
import { InvtByBinComponent } from '../invt-by-bin/invt-by-bin.component';
import { SkuByBarcodeComponent } from '../sku-by-barcode/sku-by-barcode.component';

const routes: Routes = [
    { path: "", component: QueryNavListComponent },
    { path: "query/by-barcode", component: InvtByBarcodeComponent },
    { path: "query/by-bin-code", component: InvtByBinComponent },
    { path: "query/sku-by-barcode", component: SkuByBarcodeComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class QueryNavListRoutingModule { }