import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';

import zh from '@angular/common/locales/zh';
import { SearchFormComponent } from './example/pages/search-form/search-form.component';
import { EditformComponent } from './example/pages/editform/editform.component';
import { SelectFormComponent } from './example/pages/select-form/select-form.component';
import { ListExampleComponent } from './example/pages/list-example/list-example.component';
import { DetailsExampleComponent } from './example/pages/details-example/details-example.component';
import { UploadExampleComponent } from './example/pages/upload-example/upload-example.component';
import { PrintComponent } from './example/pages/print/print.component';

import { MessagesComponent } from './pages/messages/messages.component';

import { WhNavListModule } from './pages/wh-nav-list/wh-nav-list.module';
import { InboundNavModule } from './pages/inbound-nav/inbound-nav.module';
import { OutboundNavModule } from './pages/outbound-nav/outbound-nav.module';
import { InvtNavModule } from './pages/invt-nav/invt-nav.module';
import { ProdNavListModule } from './pages/prod-nav-list/prod-nav-list.module';
import { CustNavListModule } from './pages/cust-nav-list/cust-nav-list.module';
import { SupNavListModule } from './pages/sup-nav-list/sup-nav-list.module';
import { StockNavModule } from './pages/stock-nav/stock-nav.module';

registerLocaleData(zh);

export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    EditformComponent,
    SelectFormComponent,
    MessagesComponent,
    ListExampleComponent,
    DetailsExampleComponent,
    UploadExampleComponent,
    PrintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    }),
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
  bootstrap: [AppComponent]
})
export class AppModule { }

