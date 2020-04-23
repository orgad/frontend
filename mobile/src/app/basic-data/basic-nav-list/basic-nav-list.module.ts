import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { ReactiveFormsModule } from '@angular/forms';

import { BasicNavListRoutingModule } from './basic-nav-list-routing.module';
import { BasicNavListComponent } from './basic-nav-list.component';
import { SkuAddFormComponent } from '../prod/pages/sku-add-form/sku-add-form.component';
import { BinAddFormComponent } from '../bin/pages/bin-add-form/bin-add-form.component';

@NgModule({
    imports: [
        BasicNavListRoutingModule,
        CommonModule,
        NgZorroAntdMobileModule,
        ReactiveFormsModule
    ],
    declarations: [
        BasicNavListComponent,
        SkuAddFormComponent,
        BinAddFormComponent
    ],
    exports: [BasicNavListComponent]
})
export class BasicNavListModule { }