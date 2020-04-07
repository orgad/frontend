import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { StockNavComponent } from './stock-nav.component';
import { StockNavRoutingModule } from './stock-nav-routing.module';
import { StockCheckListComponent } from 'src/app/stock/check/pages/stock-check-list/stock-check-list.component';
import { StockCheckAddFormComponent } from 'src/app/stock/check/pages/stock-check-add-form/stock-check-add-form.component';
import { StockCheckDetailsComponent } from 'src/app/stock/check/pages/stock-check-details/stock-check-details.component';
import { MoveListComponent } from 'src/app/stock/move/pages/move-list/move-list.component';
import { MoveAddFormComponent } from 'src/app/stock/move/pages/move-add-form/move-add-form.component';

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
        StockCheckListComponent,
        StockCheckAddFormComponent,
        StockCheckDetailsComponent,
        MoveListComponent,
        MoveAddFormComponent
    ],
    exports: [StockNavComponent]
})

export class StockNavModule { }