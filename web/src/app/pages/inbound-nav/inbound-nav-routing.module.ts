import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InboundNavComponent } from './inbound-nav.component';
import { InStListComponent } from 'src/app/inbound/inbound-strategy/pages/in-st-list/in-st-list.component';
import { InStDetailsComponent } from 'src/app/inbound/inbound-strategy/pages/in-st-details/in-st-details.component';
import { AsnComponent } from 'src/app/inbound/asn/pages/asn-list/asn.component';
import { AsnDetailsComponent } from 'src/app/inbound/asn/pages/asn-details/asn-details.component';
import { AsnDetailImportComponent } from 'src/app/inbound/asn/pages/asn-detail-import/asn-detail-import.component';
import { AsnCheckListComponent } from 'src/app/inbound/check/pages/asn-check-list/asn-check-list.component';
import { AsnCheckDetailsComponent } from 'src/app/inbound/check/pages/asn-check-details/asn-check-details.component';
import { AsnCheckPhotosComponent } from 'src/app/inbound/check/pages/asn-check-photos/asn-check-photos.component';
import { InboundListComponent } from 'src/app/inbound/inbound/pages/inbound-list/inbound-list.component';
import { InboundDetailsComponent } from 'src/app/inbound/inbound/pages/inbound-details/inbound-details.component';

import { QcListComponent } from 'src/app/inbound/qc/pages/qc-list/qc-list.component';
import { QcDetailsComponent } from 'src/app/inbound/qc/pages/qc-details/qc-details.component';
import { PutAwayListComponent } from 'src/app/inbound/putaway/pages/put-away-list/put-away-list.component';
import { PutAwayDetailsComponent } from 'src/app/inbound/putaway/pages/put-away-details/put-away-details.component';
import { PutAwayAdviceListComponent } from 'src/app/inbound/putaway/pages/put-away-advice-list/put-away-advice-list.component';
import { OptLogListComponent } from 'src/app/inbound/log/pages/opt-log-list/opt-log-list.component';
import { RnListComponent } from 'src/app/return-in/rn/pages/rn-list/rn-list.component';
import { PreQcListComponent } from 'src/app/return-in/pre-qc/pages/pre-qc-list/pre-qc-list.component';
import { PreQcTakeNotesComponent } from 'src/app/return-in/pre-qc/pages/pre-qc-take-notes/pre-qc-take-notes.component';

const routes: Routes = [
    { path: "", component: InboundNavComponent },
    { path: 'in/st', component: InStListComponent },
    { path: 'in/st/stDetails/:id', component: InStDetailsComponent },
    { path: 'in/asn', component: AsnComponent },
    { path: 'in/asn/details/:id', component: AsnDetailsComponent },
    { path: 'in/asn/importdetail/:id', component: AsnDetailImportComponent },
    { path: 'in/asnCheck', component: AsnCheckListComponent },
    { path: 'in/asnCheck/details/:id', component: AsnCheckDetailsComponent },
    { path: 'in/asnCheck/detail-list/:id', component: AsnCheckPhotosComponent },
    { path: 'in/inbound', component: InboundListComponent },
    { path: 'in/inbound/details/:id', component: InboundDetailsComponent },
    { path: 'in/logs/optlog', component: OptLogListComponent },
    { path: 'in/qc', component: QcListComponent },
    { path: 'in/qc/details/:id', component: QcDetailsComponent },
    { path: 'in/putAway/advice', component: PutAwayAdviceListComponent },
    { path: 'in/putAway', component: PutAwayListComponent },
    { path: 'in/putAway/details/:id', component: PutAwayDetailsComponent },
    { path: 'return-in/rn', component: RnListComponent },
    { path: 'return-in/qc', component: PreQcListComponent },
    { path: 'return-in/qc/take', component: PreQcTakeNotesComponent },
    { path: 'return-in/rcv', component: InboundListComponent },
    { path: 'return-in/putAway', component: PutAwayListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InboundNavRoutingModule { }