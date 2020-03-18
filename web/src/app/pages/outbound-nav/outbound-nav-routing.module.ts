import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OutboundNavComponent } from './outbound-nav.component';
import { DnListComponent } from '../../outbound/dn/pages/dn-list/dn-list.component';
import { DnDetailsComponent } from '../../outbound/dn/pages/dn-details/dn-details.component';
import { DnImportDetailComponent } from '../../outbound/dn/pages/dn-import-detail/dn-import-detail.component';
import { OutboundListComponent } from '../../outbound/outbound/pages/outbound-list/outbound-list.component';
import { OutboundDetailsComponent } from '../../outbound/outbound/pages/outbound-details/outbound-details.component';
import { AllotListComponent } from 'src/app/outbound/allot/allot-list/allot-list.component';
import { AllotDetailsComponent } from 'src/app/outbound/allot/allot-details/allot-details.component';
import { WaveListComponent } from 'src/app/outbound/wave/wave-list/wave-list.component';
import { WaveDetailsComponent } from 'src/app/outbound/wave/wave-details/wave-details.component';
import { PickListComponent } from 'src/app/outbound/pick/pick-list/pick-list.component';
import { PickDetailsComponent } from 'src/app/outbound/pick/pick-details/pick-details.component';
import { RechekListComponent } from 'src/app/outbound/recheck/rechek-list/rechek-list.component';
import { RechekDetailsComponent } from 'src/app/outbound/recheck/rechek-details/rechek-details.component';
import { HandOverListComponent } from 'src/app/outbound/hand-over/hand-over-list/hand-over-list.component';
import { HandOverDetailsComponent } from 'src/app/outbound/hand-over/hand-over-details/hand-over-details.component';


const routes: Routes = [
    { path: "", component: OutboundNavComponent },
    { path: 'out/dn', component: DnListComponent },
    { path: 'out/dnDetails/:id', component: DnDetailsComponent },
    { path: 'out/dn/dnDetails/importdetail/:id', component: DnImportDetailComponent },
    { path: 'out/outbound', component: OutboundListComponent },
    { path: 'out/outboundDetails/:id', component: OutboundDetailsComponent },
    { path: 'out/allot', component: AllotListComponent },
    { path: 'out/allotDetails/:id', component: AllotDetailsComponent },
    { path: 'out/wave', component: WaveListComponent },
    { path: 'out/waveDetails/:id', component: WaveDetailsComponent },
    { path: 'out/picking', component: PickListComponent },
    { path: 'out/pickingDetails/:id', component: PickDetailsComponent },
    { path: 'out/recheck', component: RechekListComponent },
    { path: 'out/recheckDetails/:id', component: RechekDetailsComponent },
    { path: 'out/handOver', component: HandOverListComponent },
    { path: 'out/handOverDetails/:id', component: HandOverDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OutboundNavRoutingModule { }