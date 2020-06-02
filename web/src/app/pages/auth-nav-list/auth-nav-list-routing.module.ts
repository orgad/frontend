import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthNavListComponent } from './auth-nav-list.component';
import { UserListComponent } from 'src/app/auth/users/pages/user-list/user-list.component';
import { RoleListComponent } from 'src/app/auth/roles/pages/role-list/role-list.component';
import { BizListComponent } from 'src/app/auth/roles/pages/biz-list/biz-list.component';
import { NavListComponent } from 'src/app/auth/navs/pages/nav-list/nav-list.component';
import { RoleNavListComponent } from 'src/app/auth/access-control/pages/role-nav-list/role-nav-list.component';
import { RoleBizListComponent } from 'src/app/auth/access-control/pages/role-biz-list/role-biz-list.component';
import { UserRoleListComponent } from 'src/app/auth/access-control/pages/user-role-list/user-role-list.component';
import { NavActionDetailListComponent } from 'src/app/auth/navs/pages/nav-action-detail-list/nav-action-detail-list.component';

const routes: Routes = [
    { path: "", component: AuthNavListComponent },
    { path: "auth/nav", component: NavListComponent },
    { path: "auth/nav/nav-action/:id", component: NavActionDetailListComponent },
    { path: "auth/role", component: RoleListComponent },
    { path: "auth/biz", component: BizListComponent },
    { path: "auth/user", component: UserListComponent },
    { path: "auth/role", component: RoleListComponent },
    { path: "auth/role-nav", component: RoleNavListComponent },
    { path: "auth/role-biz", component: RoleBizListComponent },
    { path: "auth/user-role", component: UserRoleListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthNavListRoutingModule { }