import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WhNavListComponent } from './wh-nav-list.component';
import { WarehouseListComponent } from 'src/app/warehouse/warehouse/pages/warehouse-list/warehouse-list.component';
import { ZoneListComponent } from 'src/app/warehouse/wh-zone/pages/zone-list/zone-list.component';
import { BinListComponent } from 'src/app/warehouse/wh-bin/pages/bin-list/bin-list.component';


const routes: Routes = [
    { path: "", component: WhNavListComponent },
    { path: "wh/warehouse", component: WarehouseListComponent },
    { path: "wh/zone", component: ZoneListComponent },
    { path: "wh/bin", component: BinListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class WhNavListRoutingModule { }