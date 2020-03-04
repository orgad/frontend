import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './example/pages/search-form/search-form.component';
import { EditformComponent } from './example/pages/editform/editform.component';
import { SelectFormComponent } from './example/pages/select-form/select-form.component';
import { PrintComponent } from './example/pages/print/print.component';
import { ListExampleComponent } from './example/pages/list-example/list-example.component';
import { UploadExampleComponent } from './example/pages/upload-example/upload-example.component';

import { AsnComponent } from './inbound/asn/pages/asn-list/asn.component';
import { AsnDetailsComponent } from './inbound/asn/pages/asn-details/asn-details.component';
import { AsnDetailImportComponent } from './inbound/asn/pages/asn-detail-import/asn-detail-import.component';
import { AsnCheckListComponent } from './inbound/check/pages/asn-check-list/asn-check-list.component';
import { AsnCheckDetailsComponent } from './inbound/check/pages/asn-check-details/asn-check-details.component';
import { InboundListComponent } from './inbound/inbound/pages/inbound-list/inbound-list.component';
import { InboundDetailsComponent } from './inbound/inbound/pages/inbound-details/inbound-details.component';
import { QcListComponent } from './inbound/qc/pages/qc-list/qc-list.component';
import { QcDetailsComponent } from './inbound/qc/pages/qc-details/qc-details.component';
import { PutAwayListComponent } from './inbound/putaway/pages/put-away-list/put-away-list.component';
import { PutAwayDetailsComponent } from './inbound/putaway/pages/put-away-details/put-away-details.component';
import { RcvListComponent } from './inbound/rcv/pages/rcv-list/rcv-list.component';
import { InventoryListComponent } from './inventory/pages/inventory-list/inventory-list.component';
import { InventoryDetailsComponent } from './inventory/pages/inventory-details/inventory-details.component';
import { DnListComponent } from './outbound/dn/dn-list/dn-list.component';
import { DnDetailsComponent } from './outbound/dn/dn-details/dn-details.component';
import { OutboundListComponent } from './outbound/outbound/outbound-list/outbound-list.component';
import { OutboundDetailsComponent } from './outbound/outbound/outbound-details/outbound-details.component';
import { AllotListComponent } from './outbound/allot/allot-list/allot-list.component';
import { AllotDetailsComponent } from './outbound/allot/allot-details/allot-details.component';
import { RechekListComponent } from './outbound/recheck/rechek-list/rechek-list.component';
import { RechekDetailsComponent } from './outbound/recheck/rechek-details/rechek-details.component';
import { HandOverListComponent } from './outbound/hand-over/hand-over-list/hand-over-list.component';
import { HandOverDetailsComponent } from './outbound/hand-over/hand-over-details/hand-over-details.component';
import { PickListComponent } from './outbound/pick/pick-list/pick-list.component';
import { PickDetailsComponent } from './outbound/pick/pick-details/pick-details.component';
import { WaveListComponent } from './outbound/wave/wave-list/wave-list.component';
import { WaveDetailsComponent } from './outbound/wave/wave-details/wave-details.component';
import { DetailsExampleComponent } from './example/pages/details-example/details-example.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'searchform', component: SearchFormComponent },
  { path: 'editform', component: EditformComponent },
  { path: 'list', component: ListExampleComponent },
  { path: 'details/:id', component: DetailsExampleComponent },
  { path: 'selectform', component: SelectFormComponent },
  { path: 'uploadform', component: UploadExampleComponent },
  { path: 'print', component: PrintComponent },
  { path: 'in/asn', component: AsnComponent },
  { path: 'in/asn/asnDetails/:id', component: AsnDetailsComponent },
  { path: 'in/asn/asnDetails/importdetail/:id', component: AsnDetailImportComponent },
  { path: 'in/asnCheck', component: AsnCheckListComponent },
  { path: 'in/asnCheckDetails/:id', component: AsnCheckDetailsComponent },
  { path: 'in/inbound', component: InboundListComponent },
  { path: 'in/inboundDetails/:id', component: InboundDetailsComponent },
  { path: 'in/rcv', component: RcvListComponent },
  { path: 'in/qc', component: QcListComponent },
  { path: 'in/qcDetails/:id', component: QcDetailsComponent },
  { path: 'in/putAway', component: PutAwayListComponent },
  { path: 'in/putAwayDetails/:id', component: PutAwayDetailsComponent },
  { path: 'invt', component: InventoryListComponent },
  { path: 'invtDetails/:id', component: InventoryDetailsComponent },
  { path: 'dn', component: DnListComponent },
  { path: 'dnDetails/:id', component: DnDetailsComponent },
  { path: 'outbound', component: OutboundListComponent },
  { path: 'outboundDetails/:id', component: OutboundDetailsComponent },
  { path: 'allot', component: AllotListComponent },
  { path: 'allotDetails/:id', component: AllotDetailsComponent },
  { path: 'wave', component: WaveListComponent },
  { path: 'waveDetails/:id', component: WaveDetailsComponent },
  { path: 'picking', component: PickListComponent },
  { path: 'pickingDetails/:id', component: PickDetailsComponent },
  { path: 'recheck', component: RechekListComponent },
  { path: 'recheckDetails/:id', component: RechekDetailsComponent },
  { path: 'handOver', component: HandOverListComponent },
  { path: 'handOverDetails/:id', component: HandOverDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
