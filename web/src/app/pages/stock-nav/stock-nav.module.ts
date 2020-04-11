import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { StockNavComponent } from './stock-nav.component';
import { StockNavRoutingModule } from './stock-nav-routing.module';
import { MoveListComponent } from 'src/app/stock/move/pages/move-list/move-list.component';
import { MoveAddFormComponent } from 'src/app/stock/move/pages/move-add-form/move-add-form.component';
import { StockCheckListComponent } from 'src/app/stock/check/pages/stock-check-list/stock-check-list.component';
import { StockCheckAddFormComponent } from 'src/app/stock/check/pages/stock-check-add-form/stock-check-add-form.component';
import { StockCheckDetailsComponent } from 'src/app/stock/check/pages/stock-check-details/stock-check-details.component';
import { AdjListComponent } from 'src/app/stock/adj/pages/adj-list/adj-list.component';
import { AdjAddFormComponent } from 'src/app/stock/adj/pages/adj-add-form/adj-add-form.component';
import { RepListComponent } from 'src/app/stock/rep/pages/rep-list/rep-list.component';
import { RepAddFormComponent } from 'src/app/stock/rep/pages/rep-add-form/rep-add-form.component';
import { RepDetailAddFormComponent } from 'src/app/stock/rep/pages/rep-detail-add-form/rep-detail-add-form.component';
import { RepDetailsComponent } from 'src/app/stock/rep/pages/rep-details/rep-details.component';
import { RepPlanListComponent } from 'src/app/stock/rep/pages/rep-plan-list/rep-plan-list.component';

@NgModule({
    imports: [
        StockNavRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        TranslateModule
    ],
    declarations: [
        StockNavComponent,
        MoveListComponent,
        MoveAddFormComponent,
        StockCheckListComponent,
        StockCheckAddFormComponent,
        StockCheckDetailsComponent,
        AdjListComponent,
        AdjAddFormComponent,
        RepListComponent,
        RepAddFormComponent,
        RepDetailAddFormComponent,
        RepDetailsComponent,
        RepPlanListComponent
    ],
    exports: [StockNavComponent]
})

export class StockNavModule { }