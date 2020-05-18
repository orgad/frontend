import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { TmplNavListRoutingModule } from './tmpl-nav-list-routing.module';
import { TmplNavListComponent } from './tmpl-nav-list.component';
import { PrintTmplListComponent } from 'src/app/tmpl/print-tmpl/pages/print-tmpl-list/print-tmpl-list.component';
import { PrintTmplDetailsComponent } from 'src/app/tmpl/print-tmpl/pages/print-tmpl-details/print-tmpl-details.component';
import { PrintTmplEditComponent } from 'src/app/tmpl/print-tmpl/pages/print-tmpl-edit/print-tmpl-edit.component';
import { PrintTmplEditDetailComponent } from 'src/app/tmpl/print-tmpl/pages/print-tmpl-edit-detail/print-tmpl-edit-detail.component';
import { PrintTmplEditDetailDataComponent } from 'src/app/tmpl/print-tmpl/pages/print-tmpl-edit-detail-data/print-tmpl-edit-detail-data.component';

@NgModule({
    imports: [
        TmplNavListRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        TranslateModule
    ],
    declarations: [
        TmplNavListComponent,
        PrintTmplListComponent,
        PrintTmplDetailsComponent,
        PrintTmplEditComponent,
        PrintTmplEditDetailComponent,
        PrintTmplEditDetailDataComponent
    ],
    exports: [TmplNavListComponent]
})

export class TmplNavListModule { }


