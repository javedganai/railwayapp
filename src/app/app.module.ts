import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PnrComponent } from './pnr/pnr.component';
import { StationlistComponent } from './stationlist/stationlist.component';
import { TrainsComponent } from './trains/trains.component';
import { RouteComponent } from './route/route.component';
import { FullroueComponent } from './fullroue/fullroue.component';
import { FareComponent } from './fare/fare.component';
import { LivestatusComponent } from './livestatus/livestatus.component';
import { SeatavailabilityComponent } from './seatavailability/seatavailability.component';
import { CoachcomposationComponent } from './coachcomposation/coachcomposation.component';
import { CanceledtrainComponent } from './canceledtrain/canceledtrain.component';
import { TrainatstationComponent } from './trainatstation/trainatstation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {TraindataService} from './services/traindata.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'trains', component: TrainsComponent },
  { path: 'fare', component: FareComponent },
  { path: 'canceltrain', component: CanceledtrainComponent },
  { path: 'coachcomposation', component: CoachcomposationComponent },
  { path: 'fullroute', component: FullroueComponent },
  { path: 'livestatus', component: LivestatusComponent },
  { path: 'pnr', component: PnrComponent },
  { path: 'route', component: RouteComponent },
  { path: 'stationlist', component: StationlistComponent},
  { path: 'trainstation', component:TrainatstationComponent },
  { path: 'seat', component:SeatavailabilityComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PnrComponent,
    StationlistComponent,
    TrainsComponent,
    RouteComponent,
    FullroueComponent,
    FareComponent,
    LivestatusComponent,
    SeatavailabilityComponent,
    CoachcomposationComponent,
    CanceledtrainComponent,
    TrainatstationComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
   
  ],
  providers: [TraindataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
