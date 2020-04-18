import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NavListComponent } from './nav-list/nav-list.component';
import { ExampleModule } from './examples/example.module';
import { InboundNavListModule } from './inbound/inbound-nav-list/inbound-nav-list.module';
import { OutboundNavListModule } from './outbound/outbound-nav-list/outbound-nav-list.module';
import { StockNavListModule } from './stock/stock-nav-list/stock-nav-list.module';
import { QueryNavListModule } from './query/query-nav-list/query-nav-list.module';

@NgModule({
  declarations: [
    AppComponent,
    NavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule.forRoot(),
    ExampleModule,
    InboundNavListModule,
    OutboundNavListModule,
    StockNavListModule,
    QueryNavListModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
