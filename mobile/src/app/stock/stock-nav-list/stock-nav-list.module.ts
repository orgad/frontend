import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { StockNavListComponent } from './stock-nav-list.component';
import { StockNavListRoutingModule } from './stock-nav-list-routing.module';
import { StockCheckTaskListComponent } from '../stock-check-task-list/stock-check-task-list.component';
import { StockCheckScanComponent } from '../stock-check-scan/stock-check-scan.component';

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
        StockCheckScanComponent
    ],    
    exports: [StockNavListComponent]
})
export class StockNavListModule { }