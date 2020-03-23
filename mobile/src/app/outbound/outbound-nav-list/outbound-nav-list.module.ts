import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { OutboundNavListComponent } from './outbound-nav-list.component';
import { OutboundNavListRoutingModule } from './outbound-nav-list-routing.module';
import { PickTaskListComponent } from '../pick-task-list/pick-task-list.component';
import { PickScanComponent } from '../pick-scan/pick-scan.component';
import { RecheckTaskListComponent } from '../recheck-task-list/recheck-task-list.component';
import { RecheckScanComponent } from '../recheck-scan/recheck-scan.component';
import { HandOverTaskListComponent } from '../hand-over-task-list/hand-over-task-list.component';
import { HandOverScanComponent } from '../hand-over-scan/hand-over-scan.component';

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
        PickScanComponent,
        RecheckTaskListComponent,
        RecheckScanComponent,
        HandOverTaskListComponent,
        HandOverScanComponent
    ],
    exports: [OutboundNavListComponent]
  })
  export class OutboundNavListModule { }