import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { OutboundNavListComponent } from './outbound-nav-list.component';
import { OutboundNavListRoutingModule } from './outbound-nav-list-routing.module';
import { PickTaskListComponent } from '../pick-task-list/pick-task-list.component';
import { PickScanComponent } from '../pick-scan/pick-scan.component';

@NgModule({
    imports: [
      OutboundNavListRoutingModule,
      CommonModule,
      NgZorroAntdMobileModule,
      ReactiveFormsModule
    ],
    declarations: [
        OutboundNavListComponent,
        PickTaskListComponent,
        PickScanComponent
    ],
    exports: [OutboundNavListComponent]
  })
  export class OutboundNavListModule { }