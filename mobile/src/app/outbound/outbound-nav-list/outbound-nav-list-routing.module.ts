import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OutboundNavListComponent } from './outbound-nav-list.component';
import { PickTaskListComponent } from '../pick-task-list/pick-task-list.component';
import { PickScanComponent } from '../pick-scan/pick-scan.component';
import { RecheckTaskListComponent } from '../recheck-task-list/recheck-task-list.component';
import { RecheckScanComponent } from '../recheck-scan/recheck-scan.component';
import { HandOverTaskListComponent } from '../hand-over-task-list/hand-over-task-list.component';
import { HandOverScanComponent } from '../hand-over-scan/hand-over-scan.component';

const routes: Routes = [
    { path: "", component: OutboundNavListComponent },
    { path: "outbound/pick-task-list", component:PickTaskListComponent },
    { path: "outbound/pick-scan/:id", component:PickScanComponent },
    { path: "outbound/recheck-task-list", component:RecheckTaskListComponent },
    { path: "outbound/recheck-scan/:id", component:RecheckScanComponent },
    { path: "outbound/hand-over-task-list", component:HandOverTaskListComponent },
    { path: "outbound/hand-over-scan/:id", component:HandOverScanComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class OutboundNavListRoutingModule { }