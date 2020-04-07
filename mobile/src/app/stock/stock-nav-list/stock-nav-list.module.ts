import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { StockNavListComponent } from './stock-nav-list.component';
import { StockNavListRoutingModule } from './stock-nav-list-routing.module';
import { StockCheckTaskListComponent } from '../stock-check-task-list/stock-check-task-list.component';
import { StockCheckScanComponent } from '../stock-check-scan/stock-check-scan.component';
import { MoveTaskListComponent } from '../move-task-list/move-task-list.component';
import { MoveDownScanComponent } from '../move-down-scan/move-down-scan.component';
import { MoveUpScanComponent } from '../move-up-scan/move-up-scan.component';

@NgModule({
    imports: [
      StockNavListRoutingModule,
      CommonModule,
      NgZorroAntdMobileModule,
      ReactiveFormsModule
    ],
    declarations: [
        StockNavListComponent,
        StockCheckTaskListComponent,
        StockCheckScanComponent,
        MoveTaskListComponent,
        MoveDownScanComponent,
        MoveUpScanComponent
    ],    
    exports: [StockNavListComponent]
})
export class StockNavListModule { }