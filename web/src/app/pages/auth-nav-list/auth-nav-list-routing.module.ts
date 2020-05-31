import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthNavListComponent } from './auth-nav-list.component';
import { UserListComponent } from 'src/app/auth/pages/user-list/user-list.component';
import { RoleListComponent } from 'src/app/auth/pages/role-list/role-list.component';

const routes: Routes = [
    { path: "", component: AuthNavListComponent },
    { path: "auth/user", component: UserListComponent },
    { path: "auth/role", component: RoleListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthNavListRoutingModule { }