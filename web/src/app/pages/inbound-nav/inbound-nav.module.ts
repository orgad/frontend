import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { InboundNavRoutingModule } from './inbound-nav-routing.module';
import { InboundNavComponent } from './inbound-nav.component';
import { InStListComponent } from 'src/app/inbound/inbound-strategy/pages/in-st-list/in-st-list.component';
import { InStDetailsComponent } from 'src/app/inbound/inbound-strategy/pages/in-st-details/in-st-details.component';
import { AsnComponent } from 'src/app/inbound/asn/pages/asn-list/asn.component';
import { AsnDetailsComponent } from 'src/app/inbound/asn/pages/asn-details/asn-details.component';
import { AsnDetailImportComponent } from 'src/app/inbound/asn/pages/asn-detail-import/asn-detail-import.component';
import { AsnAddFormComponent } from 'src/app/inbound/asn/pages/asn-add-form/asn-add-form.component';
import { AsnEditFormComponent } from 'src/app/inbound/asn/pages/asn-edit-form/asn-edit-form.component';
import { AsnCheckListComponent } from 'src/app/inbound/check/pages/asn-check-list/asn-check-list.component';
import { AsnCheckDetailsComponent } from 'src/app/inbound/check/pages/asn-check-details/asn-check-details.component';
import { AsnCheckPhotosComponent } from 'src/app/inbound/check/pages/asn-check-photos/asn-check-photos.component';
import { InboundListComponent } from 'src/app/inbound/inbound/pages/inbound-list/inbound-list.component';
import { InboundDetailsComponent } from 'src/app/inbound/inbound/pages/inbound-details/inbound-details.component';
import { InboundAddFormComponent } from 'src/app/inbound/inbound/pages/inbound-add-form/inbound-add-form.component';
import { QcListComponent } from 'src/app/inbound/qc/pages/qc-list/qc-list.component';
import { QcDetailsComponent } from 'src/app/inbound/qc/pages/qc-details/qc-details.component';
import { PutAwayListComponent } from 'src/app/inbound/putaway/pages/put-away-list/put-away-list.component';
import { PutAwayDetailsComponent } from 'src/app/inbound/putaway/pages/put-away-details/put-away-details.component';
import { TranslateModule } from '@ngx-translate/core';
import { PutAwayAdviceListComponent } from 'src/app/inbound/putaway/pages/put-away-advice-list/put-away-advice-list.component';

import { OptLogListComponent } from 'src/app/inbound/log/pages/opt-log-list/opt-log-list.component';
import { RnListComponent } from 'src/app/return-in/rn/pages/rn-list/rn-list.component';
import { RnAddFormComponent } from 'src/app/return-in/rn/pages/rn-add-form/rn-add-form.component';
import { RnDetailsComponent } from 'src/app/return-in/rn/pages/rn-details/rn-details.component';
import { PreQcListComponent } from 'src/app/return-in/pre-qc/pages/pre-qc-list/pre-qc-list.component';
import { PreQcTakeNotesComponent } from 'src/app/return-in/pre-qc/pages/pre-qc-take-notes/pre-qc-take-notes.component';

@NgModule({
    imports: [
        InboundNavRoutingModule,
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    declarations: [
        InboundNavComponent,
        /* */
        InStListComponent,
        InStDetailsComponent,
        /* */
        AsnComponent,
        AsnAddFormComponent,
        AsnEditFormComponent,
        AsnDetailsComponent,
        AsnDetailImportComponent,
        AsnCheckListComponent,
        AsnCheckDetailsComponent,
        AsnCheckPhotosComponent,
        InboundListComponent,
        InboundAddFormComponent,
        InboundDetailsComponent,
        OptLogListComponent,
        QcListComponent,
        QcDetailsComponent,
        PutAwayAdviceListComponent,
        PutAwayListComponent,
        PutAwayDetailsComponent,
        /* */
        RnListComponent,
        RnAddFormComponent,
        RnDetailsComponent,
        PreQcListComponent,
        PreQcTakeNotesComponent
    ],
    exports: [InboundNavComponent]
})
export class InboundNavModule { }