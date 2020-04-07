import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StockNavComponent } from './stock-nav.component';
import { StockCheckListComponent } from 'src/app/stock/pages/stock-check-list/stock-check-list.component';

const routes: Routes = [
    { path: "", component: StockNavComponent },
    { path: "stock/check", component: StockCheckListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StockNavRoutingModule { }