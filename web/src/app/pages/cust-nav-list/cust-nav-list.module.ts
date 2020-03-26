import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';

import { CustNavListRoutingModule } from './cust-nav-list-routing.module';
import { CustNavListComponent } from './cust-nav-list.component';
import { CustomerListComponent } from 'src/app/customer/customer/pages/customer-list/customer-list.component';
import { BrandListComponent } from 'src/app/customer/brand/pages/brand-list/brand-list.component';
import { ShopListComponent } from 'src/app/customer/shop/pages/shop-list/shop-list.component';

@NgModule({
    imports: [
      CustNavListRoutingModule,
      CommonModule,
      NgZorroAntdModule,
      ReactiveFormsModule,
      TranslateModule
    ],
    declarations: [  
        CustNavListComponent,
        CustomerListComponent,
        BrandListComponent,
        ShopListComponent
      ],
    exports: [CustNavListComponent]
  })
  export class CustNavListModule { }