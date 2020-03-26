import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustNavListComponent } from './cust-nav-list.component';
import { CustomerListComponent } from 'src/app/customer/customer/pages/customer-list/customer-list.component';
import { BrandListComponent } from 'src/app/customer/brand/pages/brand-list/brand-list.component';
import { ShopListComponent } from 'src/app/customer/shop/pages/shop-list/shop-list.component';

const routes: Routes = [
    { path: "", component: CustNavListComponent },
    { path: "cust/customer", component: CustomerListComponent },
    { path: "cust/brand", component: BrandListComponent },
    { path: "cust/shop", component: ShopListComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CustNavListRoutingModule { }