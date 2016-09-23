

import {ParkinglistComponent} from "./parkinglist.component";
import {ParkingdetailComponent} from "./parkingdetails.component";
import {ParkingMapComponent} from "./parkingmaps.component";
import {Routes,RouterModule} from "@angular/router";


// Route config let's you map routes to components


const routes: Routes = [

  {
    path: 'parkinglist',
    component: ParkinglistComponent


  },
  {
    path: 'parkingdetail/:id',
    component: ParkingdetailComponent
  },
  {
    path: 'parkingMap',
    component: ParkingMapComponent
  },

  {
    path: '',
    redirectTo: '/parkinglist',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
