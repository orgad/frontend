import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BasicNavListComponent } from './basic-nav-list.component';
import { SkuAddFormComponent } from '../prod/pages/sku-add-form/sku-add-form.component';
import { BinAddFormComponent } from '../bin-code/pages/bin-add-form/bin-add-form.component';
import { MatTakePhotoComponent } from '../prod/pages/mat-take-photo/mat-take-photo.component';
 
const routes: Routes = [
    { path: "", component: BasicNavListComponent },
    { path: "code/barcode", component: SkuAddFormComponent },
    { path: "code/mat", component: MatTakePhotoComponent },
    { path: "code/bin", component: BinAddFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class BasicNavListRoutingModule { }