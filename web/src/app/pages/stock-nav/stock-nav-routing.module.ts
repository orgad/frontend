import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StockNavComponent } from './stock-nav.component';
import { MoveListComponent } from 'src/app/stock/move/pages/move-list/move-list.component';
import { StockCheckListComponent } from 'src/app/stock/check/pages/stock-check-list/stock-check-list.component';
import { StockCheckDetailsComponent } from 'src/app/stock/check/pages/stock-check-details/stock-check-details.component';
import { AdjListComponent } from 'src/app/stock/adj/pages/adj-list/adj-list.component';
import { RepListComponent } from 'src/app/stock/rep/pages/rep-list/rep-list.component';
import { RepPlanListComponent } from 'src/app/stock/rep/pages/rep-plan-list/rep-plan-list.component';
import { RepDetailsComponent } from 'src/app/stock/rep/pages/rep-details/rep-details.component';
import { FreezeListComponent } from 'src/app/stock/hold-rls/freeze/pages/freeze-list/freeze-list.component';

const routes: Routes = [
    { path: "", component: StockNavComponent },
    { path: "stock/move", component: MoveListComponent },
    { path: "stock/check", component: StockCheckListComponent },
    { path: "stock/check/details/:id", component: StockCheckDetailsComponent },
    { path: "stock/adj", component: AdjListComponent },
    { path: "stock/rep-plan", component: RepPlanListComponent },
    { path: "stock/rep", component: RepListComponent },
    { path: "stock/rep/details/:id", component: RepDetailsComponent },
    { path: "stock/freeze", component: FreezeListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StockNavRoutingModule { }