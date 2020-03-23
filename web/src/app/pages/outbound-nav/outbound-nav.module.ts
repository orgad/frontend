import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';

import { OutboundNavRoutingModule } from './outbound-nav-routing.module';
import { OutboundNavComponent } from './outbound-nav.component';

import { DnListComponent } from '../../outbound/dn/pages/dn-list/dn-list.component';
import { DnAddFormComponent } from '../../outbound/dn/pages/dn-add-form/dn-add-form.component';
import { DnDetailsComponent } from '../../outbound/dn/pages/dn-details/dn-details.component';
import { DnImportDetailComponent } from 'src/app/outbound/dn/pages/dn-import-detail/dn-import-detail.component';
import { OutboundListComponent } from 'src/app/outbound/outbound/pages/outbound-list/outbound-list.component';
import { OutboundDetailsComponent } from 'src/app/outbound/outbound/pages/outbound-details/outbound-details.component';
import { AllotListComponent } from 'src/app/outbound/allot/pages/allot-list/allot-list.component';
import { AllotDetailsComponent } from 'src/app/outbound/allot/pages/allot-details/allot-details.component';
import { WaveListComponent } from 'src/app/outbound/wave/wave-list/wave-list.component';
import { WaveDetailsComponent } from 'src/app/outbound/wave/wave-details/wave-details.component';
import { PickListComponent } from 'src/app/outbound/pick/pick-list/pick-list.component';
import { PickDetailsComponent } from 'src/app/outbound/pick/pick-details/pick-details.component';
import { RechekListComponent } from 'src/app/outbound/recheck/rechek-list/rechek-list.component';
import { RechekDetailsComponent } from 'src/app/outbound/recheck/rechek-details/rechek-details.component';
import { ExpressListComponent } from 'src/app/outbound/express/pages/express-list/express-list.component';
import { ExpressAddFormComponent } from 'src/app/outbound/express/pages/express-add-form/express-add-form.component';
import { HandOverListComponent } from 'src/app/outbound/hand-over/pages/hand-over-list/hand-over-list.component';
import { HandOverDetailsComponent } from 'src/app/outbound/hand-over/pages/hand-over-details/hand-over-details.component';
import { HandOverAddFormComponent } from 'src/app/outbound/hand-over/pages/hand-over-add-form/hand-over-add-form.component';

@NgModule({
    imports: [
        OutboundNavRoutingModule,
        CommonModule,
        NgZorroAntdModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    declarations: [
        OutboundNavComponent,
        /* */
        DnListComponent,
        DnAddFormComponent,
        DnImportDetailComponent,
        DnDetailsComponent,
        OutboundListComponent,
        OutboundDetailsComponent,
        AllotListComponent,
        AllotDetailsComponent,
        WaveListComponent,
        WaveDetailsComponent,
        PickListComponent,
        PickDetailsComponent,
        ExpressListComponent,
        ExpressAddFormComponent,
        RechekListComponent,
        RechekDetailsComponent,
        HandOverListComponent,
        HandOverAddFormComponent,
        HandOverDetailsComponent
    ],
    exports: [OutboundNavComponent]
})
export class OutboundNavModule { }