import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StockNavListComponent } from './stock-nav-list.component';
import { StockCheckTaskListComponent } from '../stock-check-task-list/stock-check-task-list.component';
import { StockCheckScanComponent } from '../stock-check-scan/stock-check-scan.component';
import { MoveTaskListComponent } from '../move-task-list/move-task-list.component';
import { MoveUpScanComponent } from '../move-up-scan/move-up-scan.component';
import { MoveDownScanComponent } from '../move-down-scan/move-down-scan.component';

const routes: Routes = [
    { path: "", component: StockNavListComponent },
    { path: "stock/check/task-list", component: StockCheckTaskListComponent },
    { path: "stock/check/scan/:id", component: StockCheckScanComponent },
    { path: "stock/move/task-list", component: MoveTaskListComponent },
    { path: "stock/move/down-scan/:id", component: MoveDownScanComponent },
    { path: "stock/move/up-scan/:id", component: MoveUpScanComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StockNavListRoutingModule { }