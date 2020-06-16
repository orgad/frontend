import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { ReactiveFormsModule } from '@angular/forms';

import { BasicNavListRoutingModule } from './basic-nav-list-routing.module';
import { BasicNavListComponent } from './basic-nav-list.component';
import { SkuAddFormComponent } from '../prod/pages/sku-add-form/sku-add-form.component';
import { BinAddFormComponent } from '../bin-code/pages/bin-add-form/bin-add-form.component';
import { MatTakePhotoComponent } from '../prod/pages/mat-take-photo/mat-take-photo.component';

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
        BinAddFormComponent,
        MatTakePhotoComponent
    ],
    exports: [BasicNavListComponent]
})
export class BasicNavListModule { }