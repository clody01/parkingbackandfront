
import {Component, OnInit} from '@angular/core';


import {Router} from "@angular/router";

import {ParkingService} from "./parking/parking.service";
import {Parking} from "./parking/parking";



@Component({
  selector: 'my-map',
  template: `<div class="container">
    <div class="page-header">
      <h1>Maps  </h1>
      <p class="lead">Maps des parkings</p>
    </div>
   <div class="container">
    

<sebm-google-map [latitude]="latParis" [longitude]="lngParis" >
<div *ngFor="let parking of  listParkings">
  <sebm-google-map-marker [latitude]="parking.lat" [longitude]="parking.lng"></sebm-google-map-marker>
  </div>
</sebm-google-map>   

  </div>
  
     </div>
  
    `,

})


export class ParkingMapComponent implements OnInit{
  title: string = 'My first angular2-google-maps project';
  latParis: number = 48.85661;
  lngParis: number = 2.35222;


  listParkings:Parking[];

  constructor(private _parkingService:ParkingService , private _router: Router){

  }

  ngOnInit():any {
    this.onListeParking();

  }


  private onListeParking(){
    this._parkingService.getAllParkings().map(res=>res.json())
      .subscribe(
        parkingdata => this.listParkings = parkingdata,
        error=>console.log(error)
      );
  }


}
