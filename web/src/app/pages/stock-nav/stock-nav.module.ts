import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { StockNavComponent } from './stock-nav.component';
import { StockNavRoutingModule } from './stock-nav-routing.module';
import { StockCheckListComponent } from 'src/app/stock/pages/stock-check-list/stock-check-list.component';
import { StockCheckAddFormComponent } from 'src/app/stock/pages/stock-check-add-form/stock-check-add-form.component';

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
        StockCheckAddFormComponent
    ],
    exports: [StockNavComponent]
})

export class StockNavModule { }