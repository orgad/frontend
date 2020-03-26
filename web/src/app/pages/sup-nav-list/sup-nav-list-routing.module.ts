import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SupNavListComponent } from './sup-nav-list.component';
import { CourierListComponent } from 'src/app/supplier/courier/pages/courier-list/courier-list.component';


const routes: Routes = [
    { path: "", component: SupNavListComponent },
    { path: "sup/courier", component: CourierListComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class SupNavListRoutingModule { }