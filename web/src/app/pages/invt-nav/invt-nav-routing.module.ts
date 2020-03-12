import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InvtNavComponent } from './invt-nav.component';
import { InventoryListComponent } from 'src/app/inventory/pages/inventory-list/inventory-list.component';
import { InventoryDetailsComponent } from 'src/app/inventory/pages/inventory-details/inventory-details.component';
import { InventoryDetailListComponent } from 'src/app/inventory/pages/inventory-detail-list/inventory-detail-list.component';

const routes: Routes = [
    { path: "", component: InvtNavComponent },
    { path: 'invt/invtList', component: InventoryListComponent },
    { path: 'invt/invtDetails/:id', component: InventoryDetailsComponent },
    { path: 'invt/invtDetailList', component: InventoryDetailListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InvtNavRoutingModule { }