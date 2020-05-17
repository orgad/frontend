import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ExampleNavListRoutingModule } from './example-nav-list-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ExampleNavListComponent } from './example-nav-list.component';
import { SearchFormComponent } from 'src/app/example/pages/search-form/search-form.component';
import { EditformComponent } from 'src/app/example/pages/editform/editform.component';
import { SelectFormComponent } from 'src/app/example/pages/select-form/select-form.component';
import { ListExampleComponent } from 'src/app/example/pages/list-example/list-example.component';
import { DetailsExampleComponent } from 'src/app/example/pages/details-example/details-example.component';
import { UploadExampleComponent } from 'src/app/example/pages/upload-example/upload-example.component';
import { PrintFormComponent } from 'src/app/example/pages/print-example/local/print-form.component';
import { TrackingNoComponent } from 'src/app/example/pages/print-example/tracking-no/tracking-no.component';
import { CloudPrintComponent } from 'src/app/example/pages/print-example/remote/cloud-print/cloud-print.component';
import { SfWaybillComponent } from 'src/app/example/pages/print-example/sf-waybill/sf-waybill.component';
import { TmplPrintComponent } from 'src/app/example/pages/print-example/remote/tmpl-print/tmpl-print.component';

@NgModule({
    imports: [
        ExampleNavListRoutingModule,
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    declarations: [
        ExampleNavListComponent,
        SearchFormComponent,
        EditformComponent,
        SelectFormComponent,
        ListExampleComponent,
        DetailsExampleComponent,
        UploadExampleComponent,
        PrintFormComponent,
        TrackingNoComponent,
        CloudPrintComponent,
        SfWaybillComponent,
        TmplPrintComponent
    ],
    exports: [ExampleNavListComponent]
})
export class ExampleNavListModule { }