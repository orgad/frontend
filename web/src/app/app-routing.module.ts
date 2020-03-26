import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './example/pages/search-form/search-form.component';
import { EditformComponent } from './example/pages/editform/editform.component';
import { SelectFormComponent } from './example/pages/select-form/select-form.component';
import { PrintComponent } from './example/pages/print/print.component';
import { ListExampleComponent } from './example/pages/list-example/list-example.component';
import { UploadExampleComponent } from './example/pages/upload-example/upload-example.component';
import { DetailsExampleComponent } from './example/pages/details-example/details-example.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'searchform', component: SearchFormComponent },
  { path: 'editform', component: EditformComponent },
  { path: 'list', component: ListExampleComponent },
  { path: 'details/:id', component: DetailsExampleComponent },
  { path: 'selectform', component: SelectFormComponent },
  { path: 'uploadform', component: UploadExampleComponent },
  { path: 'print', component: PrintComponent },
  { path: 'wh', loadChildren: () => import('./pages/wh-nav-list/wh-nav-list.module').then(m => m.WhNavListModule) },
  { path: 'prod', loadChildren: () => import('./pages/prod-nav-list/prod-nav-list.module').then(m => m.ProdNavListModule) },
  { path: 'cust', loadChildren: () => import('./pages/cust-nav-list/cust-nav-list.module').then(m => m.CustNavListModule) },
  { path: 'sup', loadChildren: () => import('./pages/sup-nav-list/sup-nav-list.module').then(m => m.SupNavListModule) },
  { path: 'in', loadChildren: () => import('./pages/inbound-nav/inbound-nav.module').then(m => m.InboundNavModule) },
  { path: 'out', loadChildren: () => import('./pages/outbound-nav/outbound-nav.module').then(m => m.OutboundNavModule) },
  { path: 'invt', loadChildren: () => import('./pages/invt-nav/invt-nav.module').then(m => m.InvtNavModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
