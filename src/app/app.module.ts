import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import {ParkingService} from "./parking/parking.service";
import {ParkingMapComponent} from "./parkingmaps.component";
import {ParkingdetailComponent} from "./parkingdetails.component";
import {ParkinglistComponent} from "./parkinglist.component";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routes";


@NgModule({
  imports: [

    HttpModule,
    routing,
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSnisSA1e77Aedi5ESIPSifm9wBq4Q2os'
    })
  ],
  providers: [ParkingService],
  declarations: [ AppComponent,ParkingMapComponent,ParkingdetailComponent,ParkinglistComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
