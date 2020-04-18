import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { InboundNavListComponent } from './inbound-nav-list.component';
import { InboundListComponent } from '../inbound-list/inbound-list.component';
import { RcvScanComponent } from '../rcv-scan/rcv-scan.component';
import { QcScanComponent } from '../qc-scan/qc-scan.component';
import { PutAwayScanComponent } from '../put-away-scan/put-away-scan.component';
import { CheckTakePhotoComponent } from '../check-take-photo/check-take-photo.component';
import { CheckListComponent } from '../check-list/check-list.component';
import { CheckTaskListComponent } from '../check-task-list/check-task-list.component';
import { CheckUpdateComponent } from '../check-update/check-update.component';
import { RcvListComponent } from '../rcv-list/rcv-list.component';
import { QcTaskListComponent } from '../qc-task-list/qc-task-list.component';
import { PutAwayTaskListComponent } from '../put-away-task-list/put-away-task-list.component';
import { PkgScanComponent } from 'src/app/return-in/pkg-scan/pkg-scan.component';
import { ReturnRcvTaskListComponent } from 'src/app/return-in/return-rcv-task-list/return-rcv-task-list.component';
import { ReturnRcvScanComponent } from 'src/app/return-in/return-rcv-scan/return-rcv-scan.component';

const routes: Routes = [
  { path: "", component: InboundNavListComponent },
  { path: "inbound/check-list", component: CheckListComponent },
  { path: "inbound/check-task-list", component: CheckTaskListComponent },
  { path: "inbound/check-update/:id", component: CheckUpdateComponent },
  { path: 'inbound/take-photo/:id', component: CheckTakePhotoComponent },
  { path: 'inbound/list', component: InboundListComponent },
  { path: 'inbound/rcv-list', component: RcvListComponent },
  { path: 'inbound/rcv-scan/:id', component: RcvScanComponent },
  { path: 'inbound/qc-list', component: QcTaskListComponent },
  { path: 'inbound/qc-scan/:id', component: QcScanComponent },
  { path: 'inbound/put-away-list', component: PutAwayTaskListComponent },
  { path: 'inbound/put-away-scan/:id', component: PutAwayScanComponent },
  { path: 'returnIn/pkg-scan', component: PkgScanComponent },
  { path: 'returnIn/rcv-task-list', component: ReturnRcvTaskListComponent },
  { path: 'returnIn/rcv-scan/:id', component: ReturnRcvScanComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InboundNavListRoutingModule { }
