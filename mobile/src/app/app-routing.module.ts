import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavListComponent } from './nav-list/nav-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/nav' },
  { path: 'nav', component: NavListComponent },
  { path: 'example', loadChildren: () => import('./examples/example.module').then(m => m.ExampleModule) },
  { path: 'inbound', loadChildren: () => import('./inbound/inbound-nav-list/inbound-nav-list.module').then(m => m.InboundNavListModule) },
  { path: 'outbound', loadChildren: () => import('./outbound/outbound-nav-list/outbound-nav-list.module').then(m => m.OutboundNavListModule) },
  { path: 'stock', loadChildren: () => import('./stock/stock-nav-list/stock-nav-list.module').then(m => m.StockNavListModule) },
  { path: 'query', loadChildren: () => import('./query/query-nav-list/query-nav-list.module').then(m => m.QueryNavListModule) },
  { path: 'code', loadChildren: () => import('./basic-data/basic-nav-list/basic-nav-list.module').then(m => m.BasicNavListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
