
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/pages/login.component';
import { MainModule, createTranslateHttpLoader } from './auth/main/pages/main.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { httpInterceptorProviders } from './http-interceptors';
import TokenUtil from './utils/token.util';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    MainModule,
    RouterModule,
    IconsProviderModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    TokenUtil,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  providers: [
    httpInterceptorProviders,
    { provide: NZ_I18N, useValue: en_US },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

