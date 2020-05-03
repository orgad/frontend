import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'welcome', loadChildren: () => import('../../../welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'example', loadChildren: () => import('../../../pages/example-nav-list/example-nav-list.module').then(m => m.ExampleNavListModule) },
  { path: 'wh', loadChildren: () => import('../../../pages/wh-nav-list/wh-nav-list.module').then(m => m.WhNavListModule) },
  { path: 'prod', loadChildren: () => import('../../../pages/prod-nav-list/prod-nav-list.module').then(m => m.ProdNavListModule) },
  { path: 'cust', loadChildren: () => import('../../../pages/cust-nav-list/cust-nav-list.module').then(m => m.CustNavListModule) },
  { path: 'sup', loadChildren: () => import('../../../pages/sup-nav-list/sup-nav-list.module').then(m => m.SupNavListModule) },
  { path: 'in', loadChildren: () => import('../../../pages/inbound-nav/inbound-nav.module').then(m => m.InboundNavModule) },
  { path: 'out', loadChildren: () => import('../../../pages/outbound-nav/outbound-nav.module').then(m => m.OutboundNavModule) },
  { path: 'invt', loadChildren: () => import('../../../pages/invt-nav/invt-nav.module').then(m => m.InvtNavModule) },
  { path: 'stock', loadChildren: () => import('../../../pages/stock-nav/stock-nav.module').then(m => m.StockNavModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }