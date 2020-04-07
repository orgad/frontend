import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StockNavListComponent } from './stock-nav-list.component';
import { StockCheckTaskListComponent } from '../stock-check-task-list/stock-check-task-list.component';
import { StockCheckScanComponent } from '../stock-check-scan/stock-check-scan.component';

const routes: Routes = [
    { path: "", component: StockNavListComponent },
    { path: "stock/check/task-list", component: StockCheckTaskListComponent },
    { path: "stock/check/scan/:id", component: StockCheckScanComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StockNavListRoutingModule { }