import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';

import { WhNavListRoutingModule } from './wh-nav-list-routing.module';
import { WhNavListComponent } from './wh-nav-list.component';
import { WarehouseListComponent } from 'src/app/warehouse/warehouse/pages/warehouse-list/warehouse-list.component';
import { ZoneListComponent } from 'src/app/warehouse/wh-zone/pages/zone-list/zone-list.component';
import { BinListComponent } from 'src/app/warehouse/wh-bin/pages/bin-list/bin-list.component';


@NgModule({
    imports: [
      WhNavListRoutingModule,
      CommonModule,
      NgZorroAntdModule,
      ReactiveFormsModule,
      TranslateModule
    ],
    declarations: [
        WhNavListComponent,
        WarehouseListComponent,
        ZoneListComponent,
        BinListComponent
    ],
    exports: [WhNavListComponent]
  })
  export class WhNavListModule { }