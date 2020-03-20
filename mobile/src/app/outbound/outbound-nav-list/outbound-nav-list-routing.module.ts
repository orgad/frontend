import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OutboundNavListComponent } from './outbound-nav-list.component';
import { PickTaskListComponent } from '../pick-task-list/pick-task-list.component';
import { PickScanComponent } from '../pick-scan/pick-scan.component';

const routes: Routes = [
    { path: "", component: OutboundNavListComponent },
    { path: "outbound/pick-task-list", component:PickTaskListComponent },
    { path: "outbound/pick-scan/:id", component:PickScanComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class OutboundNavListRoutingModule { }