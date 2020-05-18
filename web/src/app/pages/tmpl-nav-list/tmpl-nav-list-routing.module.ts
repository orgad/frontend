import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TmplNavListComponent } from './tmpl-nav-list.component';
import { PrintTmplListComponent } from 'src/app/tmpl/print-tmpl/pages/print-tmpl-list/print-tmpl-list.component';
import { PrintTmplDetailsComponent } from 'src/app/tmpl/print-tmpl/pages/print-tmpl-details/print-tmpl-details.component';

const routes: Routes = [
    { path: '', component: TmplNavListComponent },
    { path: 'tmpl/print-list', component: PrintTmplListComponent },
    { path: 'tmpl/print-list/details/:id', component: PrintTmplDetailsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TmplNavListRoutingModule { }