import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { AuthNavListRoutingModule } from './auth-nav-list-routing.module';
import { AuthNavListComponent } from './auth-nav-list.component';
import { UserListComponent } from 'src/app/auth/users/pages/user-list/user-list.component';
import { UserAddFormComponent } from 'src/app/auth/users/pages/user-add-form/user-add-form.component';
import { RoleListComponent } from 'src/app/auth/roles/pages/role-list/role-list.component';
import { NavListComponent } from 'src/app/auth/navs/pages/nav-list/nav-list.component';
import { BizListComponent } from 'src/app/auth/roles/pages/biz-list/biz-list.component';
import { RoleNavListComponent } from 'src/app/auth/access-control/pages/role-nav-list/role-nav-list.component';
import { RoleBizListComponent } from 'src/app/auth/access-control/pages/role-biz-list/role-biz-list.component';
import { UserRoleListComponent } from 'src/app/auth/access-control/pages/user-role-list/user-role-list.component';
import { NavActionDetailListComponent } from 'src/app/auth/navs/pages/nav-action-detail-list/nav-action-detail-list.component';

@NgModule({
    imports: [
        AuthNavListRoutingModule,
        CommonModule,
        NgZorroAntdModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    declarations: [
        AuthNavListComponent,
        NavListComponent,
        NavActionDetailListComponent,
        UserListComponent,
        UserAddFormComponent,
        RoleListComponent,
        BizListComponent,
        RoleNavListComponent,
        RoleBizListComponent,
        UserRoleListComponent
    ],
    exports: [AuthNavListComponent]
})
export class AuthNavListModule { }