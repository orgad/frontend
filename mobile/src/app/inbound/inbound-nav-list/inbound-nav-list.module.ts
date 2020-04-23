import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { ReactiveFormsModule } from '@angular/forms';

import { InboundNavListRoutingModule } from './inbound-nav-list-routing.module';
import { InboundNavListComponent } from './inbound-nav-list.component';
import { InboundListComponent } from '../inbound-list/inbound-list.component';
import { RcvListComponent } from '../rcv-list/rcv-list.component';
import { RcvScanComponent } from '../rcv-scan/rcv-scan.component';
import { QcScanComponent } from '../qc-scan/qc-scan.component';
import { PutAwayScanComponent } from '../put-away-scan/put-away-scan.component';
import { CheckTakePhotoComponent } from '../check-take-photo/check-take-photo.component';
import { CheckListComponent } from '../check-list/check-list.component';
import { CheckTaskListComponent } from '../check-task-list/check-task-list.component';
import { CheckUpdateComponent } from '../check-update/check-update.component';
import { QcTaskListComponent } from '../qc-task-list/qc-task-list.component';
import { PutAwayTaskListComponent } from '../put-away-task-list/put-away-task-list.component';
/* */
import { PkgScanComponent } from 'src/app/return-in/pkg-scan/pkg-scan.component';
import { ReturnRcvTaskListComponent } from 'src/app/return-in/return-rcv-task-list/return-rcv-task-list.component';
import { ReturnRcvScanComponent } from 'src/app/return-in/return-rcv-scan/return-rcv-scan.component';

@NgModule({
  imports: [
    InboundNavListRoutingModule,
    CommonModule,
    NgZorroAntdMobileModule,
    ReactiveFormsModule
  ],
  declarations: [
    CheckListComponent,
    CheckTaskListComponent,
    CheckUpdateComponent,
    CheckTakePhotoComponent,
    InboundNavListComponent,
    InboundListComponent,
    RcvListComponent,
    RcvScanComponent,
    QcTaskListComponent,
    QcScanComponent,
    PutAwayTaskListComponent,
    PutAwayScanComponent,
    /* */
    PkgScanComponent,
    ReturnRcvTaskListComponent,
    ReturnRcvScanComponent
  ],
  exports: [InboundNavListComponent]
})
export class InboundNavListModule { }