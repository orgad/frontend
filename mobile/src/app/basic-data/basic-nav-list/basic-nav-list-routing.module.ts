import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BasicNavListComponent } from './basic-nav-list.component';
import { SkuAddFormComponent } from '../prod/pages/sku-add-form/sku-add-form.component';
import { BinAddFormComponent } from '../bin/pages/bin-add-form/bin-add-form.component';
 
const routes: Routes = [
    { path: "", component: BasicNavListComponent },
    { path: "code/barcode", component: SkuAddFormComponent },
    { path: "code/bin", component: BinAddFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class BasicNavListRoutingModule { }