import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';

import { InvtNavComponent } from './invt-nav.component';
import { InvtNavRoutingModule } from './invt-nav-routing.module';
import { InventoryListComponent } from 'src/app/inventory/pages/inventory-list/inventory-list.component';
import { InventoryDetailsComponent } from 'src/app/inventory/pages/inventory-details/inventory-details.component';
import { InventoryDetailListComponent } from 'src/app/inventory/pages/inventory-detail-list/inventory-detail-list.component';

@NgModule({
    imports: [
        InvtNavRoutingModule,
        CommonModule,
        NgZorroAntdModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    declarations: [
        InvtNavComponent,
        InventoryListComponent,
        InventoryDetailsComponent,
        InventoryDetailListComponent
   ],
    exports: [InvtNavComponent]
})
export class InvtNavModule { }