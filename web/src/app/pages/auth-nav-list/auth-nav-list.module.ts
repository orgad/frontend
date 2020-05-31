import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { AuthNavListRoutingModule } from './auth-nav-list-routing.module';
import { AuthNavListComponent } from './auth-nav-list.component';
import { UserListComponent } from 'src/app/auth/pages/user-list/user-list.component';
import { UserAddFormComponent } from 'src/app/auth/pages/user-add-form/user-add-form.component';
import { RoleListComponent } from 'src/app/auth/pages/role-list/role-list.component';

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
        UserListComponent,
        UserAddFormComponent,
        RoleListComponent,
    ],
    exports: [AuthNavListComponent]
})
export class AuthNavListModule { }