import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TmplNavListComponent } from './tmpl-nav-list.component';
import { PrintTmplListComponent } from 'src/app/tmpl/print-tmpl/pages/print-tmpl-list/print-tmpl-list.component';
import { PrintTmplDetailsComponent } from 'src/app/tmpl/print-tmpl/pages/print-tmpl-details/print-tmpl-details.component';
import { ImportTmplListComponent } from 'src/app/tmpl/import-export-tmpl/pages/import-tmpl-list/import-tmpl-list.component';
import { ImportTmplDetailsComponent } from 'src/app/tmpl/import-export-tmpl/pages/import-tmpl-details/import-tmpl-details.component';

const routes: Routes = [
    { path: '', component: TmplNavListComponent },
    { path: 'tmpl/print-list', component: PrintTmplListComponent },
    { path: 'tmpl/print-list/details/:id', component: PrintTmplDetailsComponent },
    { path: 'tmpl/import-list', component: ImportTmplListComponent },
    { path: 'tmpl/import-list/details/:id', component: ImportTmplDetailsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TmplNavListRoutingModule { }