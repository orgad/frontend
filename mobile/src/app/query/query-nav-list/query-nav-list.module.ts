import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { QueryNavListComponent } from './query-nav-list.component';
import { QueryNavListRoutingModule } from './query-nav-list-routing.module';
import { InvtByBinComponent } from '../invt-by-bin/invt-by-bin.component';
import { InvtByBarcodeComponent } from '../invt-by-barcode/invt-by-barcode.component';
import { SkuByBarcodeComponent } from '../sku-by-barcode/sku-by-barcode.component';

@NgModule({
    imports: [
      QueryNavListRoutingModule,
      CommonModule,
      NgZorroAntdMobileModule,
      ReactiveFormsModule
    ],
    declarations: [
        QueryNavListComponent,
        InvtByBarcodeComponent,
        InvtByBinComponent,
        SkuByBarcodeComponent
    ],
    exports: [QueryNavListComponent]
  })
  export class QueryNavListModule { }