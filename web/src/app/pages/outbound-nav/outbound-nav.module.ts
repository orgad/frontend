import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';

import { OutboundNavRoutingModule } from './outbound-nav-routing.module';
import { OutboundNavComponent } from './outbound-nav.component';
import { HandOverDetailsComponent } from 'src/app/outbound/hand-over/hand-over-details/hand-over-details.component';
import { DnListComponent } from 'src/app/outbound/dn/dn-list/dn-list.component';
import { DnDetailsComponent } from 'src/app/outbound/dn/dn-details/dn-details.component';
import { OutboundListComponent } from 'src/app/outbound/outbound/outbound-list/outbound-list.component';
import { OutboundDetailsComponent } from 'src/app/outbound/outbound/outbound-details/outbound-details.component';
import { AllotListComponent } from 'src/app/outbound/allot/allot-list/allot-list.component';
import { AllotDetailsComponent } from 'src/app/outbound/allot/allot-details/allot-details.component';
import { WaveListComponent } from 'src/app/outbound/wave/wave-list/wave-list.component';
import { WaveDetailsComponent } from 'src/app/outbound/wave/wave-details/wave-details.component';
import { PickListComponent } from 'src/app/outbound/pick/pick-list/pick-list.component';
import { PickDetailsComponent } from 'src/app/outbound/pick/pick-details/pick-details.component';
import { RechekListComponent } from 'src/app/outbound/recheck/rechek-list/rechek-list.component';
import { RechekDetailsComponent } from 'src/app/outbound/recheck/rechek-details/rechek-details.component';
import { HandOverListComponent } from 'src/app/outbound/hand-over/hand-over-list/hand-over-list.component';

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
        DnDetailsComponent,
        OutboundListComponent,
        OutboundDetailsComponent,
        AllotListComponent,
        AllotDetailsComponent,
        WaveListComponent,
        WaveDetailsComponent,
        PickListComponent,
        PickDetailsComponent,
        RechekListComponent,
        RechekDetailsComponent,
        HandOverListComponent,
        HandOverDetailsComponent
    ],
    exports: [OutboundNavComponent]
})
export class OutboundNavModule { }