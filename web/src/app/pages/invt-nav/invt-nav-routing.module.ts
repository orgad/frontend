import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InvtNavComponent } from './invt-nav.component';
import { InventoryListComponent } from 'src/app/inventory/pages/inventory-list/inventory-list.component';
import { InventoryDetailsComponent } from 'src/app/inventory/pages/inventory-details/inventory-details.component';

const routes: Routes = [
    { path: "", component: InvtNavComponent },
    { path: 'invt/invt', component: InventoryListComponent },
    { path: 'invt/invtDetails/:id', component: InventoryDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InvtNavRoutingModule { }