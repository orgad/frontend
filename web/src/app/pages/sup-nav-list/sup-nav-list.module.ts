import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { SupNavListComponent } from './sup-nav-list.component';
import { SupNavListRoutingModule } from './sup-nav-list-routing.module';
import { CourierListComponent } from 'src/app/supplier/courier/pages/courier-list/courier-list.component';

@NgModule({
    imports: [
      SupNavListRoutingModule,
      CommonModule,
      NgZorroAntdModule,
      ReactiveFormsModule,
      TranslateModule
    ],
    declarations: [  
        SupNavListComponent,
        CourierListComponent
      ],
    exports: [SupNavListComponent]
  })
  export class SupNavListModule { }