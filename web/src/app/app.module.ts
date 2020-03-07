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

import { MessagesComponent } from './messages/messages.component';

import { AsnComponent } from './inbound/asn/pages/asn-list/asn.component';
import { AsnDetailsComponent } from './inbound/asn/pages/asn-details/asn-details.component';
import { AsnDetailImportComponent } from './inbound/asn/pages/asn-detail-import/asn-detail-import.component';
import { AsnCheckListComponent } from './inbound/check/pages/asn-check-list/asn-check-list.component';
import { AsnCheckDetailsComponent } from './inbound/check/pages/asn-check-details/asn-check-details.component';

import { InboundListComponent } from './inbound/inbound/pages/inbound-list/inbound-list.component';
import { InboundDetailsComponent } from './inbound/inbound/pages/inbound-details/inbound-details.component';
import { RcvListComponent } from './inbound/rcv/pages/rcv-list/rcv-list.component';

import { QcListComponent } from './inbound/qc/pages/qc-list/qc-list.component';
import { QcDetailsComponent } from './inbound/qc/pages/qc-details/qc-details.component';

import { PutAwayListComponent } from './inbound/putaway/pages/put-away-list/put-away-list.component';
import { PutAwayDetailsComponent } from './inbound/putaway/pages/put-away-details/put-away-details.component';

import { InventoryListComponent } from './inventory/pages/inventory-list/inventory-list.component';
import { InventoryDetailsComponent } from './inventory/pages/inventory-details/inventory-details.component';

import { DnListComponent } from './outbound/dn/dn-list/dn-list.component';
import { DnDetailsComponent } from './outbound/dn/dn-details/dn-details.component';

import { OutboundListComponent } from './outbound/outbound/outbound-list/outbound-list.component';
import { OutboundDetailsComponent } from './outbound/outbound/outbound-details/outbound-details.component';

import { AllotListComponent } from './outbound/allot/allot-list/allot-list.component';
import { AllotDetailsComponent } from './outbound/allot/allot-details/allot-details.component';

import { HandOverListComponent } from './outbound/hand-over/hand-over-list/hand-over-list.component';
import { HandOverDetailsComponent } from './outbound/hand-over/hand-over-details/hand-over-details.component';

import { PickListComponent } from './outbound/pick/pick-list/pick-list.component';
import { PickDetailsComponent } from './outbound/pick/pick-details/pick-details.component';

import { WaveListComponent } from './outbound/wave/wave-list/wave-list.component';
import { WaveDetailsComponent } from './outbound/wave/wave-details/wave-details.component';

import { RechekListComponent } from './outbound/recheck/rechek-list/rechek-list.component';
import { RechekDetailsComponent } from './outbound/recheck/rechek-details/rechek-details.component';
import { InStListComponent } from './inbound/inbound-strategy/pages/in-st-list/in-st-list.component';
import { InStDetailsComponent } from './inbound/inbound-strategy/pages/in-st-details/in-st-details.component';

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
    /* */
    InStListComponent,
    InStDetailsComponent,
    /* */
    AsnComponent,
    AsnDetailsComponent,
    AsnDetailImportComponent,
    AsnCheckListComponent,
    AsnCheckDetailsComponent,
    InboundListComponent,
    InboundDetailsComponent,
    RcvListComponent,
    QcListComponent,
    QcDetailsComponent,
    PutAwayListComponent,
    PutAwayDetailsComponent,
    /* */
    InventoryListComponent,
    InventoryDetailsComponent,
    /* */
    DnListComponent,
    DnDetailsComponent,
    OutboundListComponent,
    OutboundDetailsComponent,
    AllotListComponent,
    AllotDetailsComponent,
    WaveListComponent,
    WaveDetailsComponent,
    PickListComponent,
    PickDetailsComponent,
    RechekListComponent,
    RechekDetailsComponent,
    HandOverListComponent,
    HandOverDetailsComponent
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
    })
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

