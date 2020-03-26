import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';

import { ProdNavListRoutingModule } from './prod-nav-list-routing.module';
import { ProdNavListComponent } from './prod-nav-list.component';
import { CatalogListComponent } from 'src/app/product/catalog/pages/catalog-list/catalog-list.component';
import { ProductListComponent } from 'src/app/product/product/pages/product-list/product-list.component';
import { SkuListComponent } from 'src/app/product/sku/pages/sku-list/sku-list.component';
import { BarcodeListComponent } from 'src/app/product/barcode/pages/barcode-list/barcode-list.component';

@NgModule({
    imports: [
      ProdNavListRoutingModule,
      CommonModule,
      NgZorroAntdModule,
      ReactiveFormsModule,
      TranslateModule
    ],
    declarations: [
        ProdNavListComponent,
        CatalogListComponent,
        ProductListComponent,
        SkuListComponent,
        BarcodeListComponent
    ],
    exports: [ProdNavListComponent]
  })
  export class ProdNavListModule { }