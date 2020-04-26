import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { registerLocaleData, LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import zh from '@angular/common/locales/zh';
import { NZ_I18N, en_US, NgZorroAntdModule } from 'ng-zorro-antd';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SearchFormComponent } from '../../../example/pages/search-form/search-form.component';
import { EditformComponent } from '../../../example/pages/editform/editform.component';
import { SelectFormComponent } from '../../../example/pages/select-form/select-form.component';
import { ListExampleComponent } from '../../../example/pages/list-example/list-example.component';
import { DetailsExampleComponent } from '../../../example/pages/details-example/details-example.component';
import { UploadExampleComponent } from '../../../example/pages/upload-example/upload-example.component';
import { PrintFormComponent } from '../../../example/pages/print-example/local/print-form.component';
import { CloudPrintComponent } from 'src/app/example/pages/print-example/remote/cloud-print/cloud-print.component';

import { MessagesComponent } from '../../../pages/messages/messages.component';
import { WhNavListModule } from '../../../pages/wh-nav-list/wh-nav-list.module';
import { InboundNavModule } from '../../../pages/inbound-nav/inbound-nav.module';
import { OutboundNavModule } from '../../../pages/outbound-nav/outbound-nav.module';
import { InvtNavModule } from '../../../pages/invt-nav/invt-nav.module';
import { ProdNavListModule } from '../../../pages/prod-nav-list/prod-nav-list.module';
import { CustNavListModule } from '../../../pages/cust-nav-list/cust-nav-list.module';
import { SupNavListModule } from '../../../pages/sup-nav-list/sup-nav-list.module';
import { StockNavModule } from '../../../pages/stock-nav/stock-nav.module';

registerLocaleData(zh);

export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MainComponent,
    SearchFormComponent,
    EditformComponent,
    SelectFormComponent,
    MessagesComponent,
    ListExampleComponent,
    DetailsExampleComponent,
    UploadExampleComponent,
    PrintFormComponent,
    CloudPrintComponent
  ],
  imports: [
    TranslateModule,
    NgZorroAntdModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    MainRoutingModule,
    WhNavListModule,
    ProdNavListModule,
    CustNavListModule,
    SupNavListModule,
    InboundNavModule,
    OutboundNavModule,
    InvtNavModule,
    StockNavModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }

