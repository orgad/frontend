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
import { RcvListComponent } from 'src/app/inbound/rcv/pages/rcv-list/rcv-list.component';
import { QcListComponent } from 'src/app/inbound/qc/pages/qc-list/qc-list.component';
import { QcDetailsComponent } from 'src/app/inbound/qc/pages/qc-details/qc-details.component';
import { PutAwayListComponent } from 'src/app/inbound/putaway/pages/put-away-list/put-away-list.component';
import { PutAwayDetailsComponent } from 'src/app/inbound/putaway/pages/put-away-details/put-away-details.component';

const routes: Routes = [
    { path: "", component: InboundNavComponent },
    { path: 'in/st', component: InStListComponent },
    { path: 'in/st/stDetails/:id', component: InStDetailsComponent },
    { path: 'in/asn', component: AsnComponent },
    { path: 'in/asn/asnDetails/:id', component: AsnDetailsComponent },
    { path: 'in/asn/asnDetails/importdetail/:id', component: AsnDetailImportComponent },
    { path: 'in/asnCheck', component: AsnCheckListComponent },
    { path: 'in/asnCheckDetails/:id', component: AsnCheckDetailsComponent },
    { path: 'in/asnCheck/detail-list/:id', component: AsnCheckPhotosComponent },
    { path: 'in/inbound', component: InboundListComponent },
    { path: 'in/inboundDetails/:id', component: InboundDetailsComponent },
    { path: 'in/rcv', component: RcvListComponent },
    { path: 'in/qc', component: QcListComponent },
    { path: 'in/qcDetails/:id', component: QcDetailsComponent },
    { path: 'in/putAway', component: PutAwayListComponent },
    { path: 'in/putAwayDetails/:id', component: PutAwayDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InboundNavRoutingModule { }