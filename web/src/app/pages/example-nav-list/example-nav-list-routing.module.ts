import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ExampleNavListComponent } from './example-nav-list.component';
import { SearchFormComponent } from 'src/app/example/pages/search-form/search-form.component';
import { ListExampleComponent } from 'src/app/example/pages/list-example/list-example.component';
import { EditformComponent } from 'src/app/example/pages/editform/editform.component';
import { DetailsExampleComponent } from 'src/app/example/pages/details-example/details-example.component';
import { SelectFormComponent } from 'src/app/example/pages/select-form/select-form.component';
import { UploadExampleComponent } from 'src/app/example/pages/upload-example/upload-example.component';
import { PrintFormComponent } from 'src/app/example/pages/print-example/local/print-form.component';
import { CloudPrintComponent } from 'src/app/example/pages/print-example/remote/cloud-print/cloud-print.component';
import { TrackingNoComponent } from 'src/app/example/pages/print-example/tracking-no/tracking-no.component';
import { SfWaybillComponent } from 'src/app/example/pages/print-example/sf-waybill/sf-waybill.component';
import { TmplPrintComponent } from 'src/app/example/pages/print-example/remote/tmpl-print/tmpl-print.component';

const routes: Routes = [
    { path: "", component: ExampleNavListComponent },
    { path: 'searchform', component: SearchFormComponent },
    { path: 'editform', component: EditformComponent },
    { path: 'list', component: ListExampleComponent },
    { path: 'details/:id', component: DetailsExampleComponent },
    { path: 'selectform', component: SelectFormComponent },
    { path: 'uploadform', component: UploadExampleComponent },
    { path: 'print', component: PrintFormComponent },
    { path: 'cloudprint', component: CloudPrintComponent },
    { path: 'tmplprint', component: TmplPrintComponent },
    { path: 'trackingprint', component: TrackingNoComponent },
    { path: 'sfwaybill', component: SfWaybillComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ExampleNavListRoutingModule { }