import {Component, OnInit} from '@angular/core';


import {Router, ActivatedRoute} from '@angular/router';

import {ParkingService} from "./parking/parking.service";
import {Parking} from "./parking/parking";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Component({
  selector: 'my-liste',
  template: `
        <div class="container">
    <div class="page-header">
      <h1>Liste  parking </h1>
      <p class="lead">Liste de tous les parkings </p>
    </div>
   <div class="container">
   <div *ngIf="!createNewParking">
   <button (click)="onCreateParking()">New Parking</button>
   <br>
   <br>
<div *ngIf="!successSaved"  class="alert alert-success alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</div>
   <br>
   <br>
   <table class="table table-striped table-hover">
			<thead>
				<tr class="bg-success">
					<th>Latitude</th>
					<th>Longitude</th>
					<th>Name </th>
					<th>Address</th>
					<th>Available</th>
					<th>Slug</th>
					<th>Has Camera</th>
					<th>Has watchman</th>
					<th>Zip Code</th>
					<th>District</th>
					<th>City</th>
					<th>Main Picture</th>
					<th>Price per Month</th>	
						
					<th></th>	
					<th></th>	
				</tr>
				  
			</thead>
			<tbody   >
			   
                <tr  *ngFor="let parking of  listParkings ;let i = index ">                    
                    <td>{{parking.lat}}</td>
                    <td>{{parking.lng}}</td>
                    <td>{{parking.name}}</td>
                    <td>{{parking.address}}</td>
                    <td>{{parking.available}}</td>
                    <td>{{parking.slug}}</td>
                    <td>{{parking.has_camera}}</td>
                    <td>{{parking.has_watchman}}</td>
                    <td>{{parking.zip_code}}</td>
                    <td>{{parking.district}}</td>
                    <td>{{parking.city}}</td>
                    <td>{{parking.main_picture}}</td>
                    <td>{{parking.price_month}}</td>                   
                                     
                    <td>                     
                    <button   (click)="onEdit(parking.id)">
                        <span class="glyphicon glyphicon-pencil"  ></span>
                    </button>
                    </td>
                    <td >
                      <button  (click)="onDelete(parking.id,i)">
                        <span class="glyphicon glyphicon-remove"  ></span> 
                      </button>
                    </td>
                </tr>            
			</tbody>
		</table>
   </div>
   <div *ngIf="createNewParking">
    
                
    <form (ngSubmit)="onSubmit()" >
    
		<div class="form-group">
      <label for="name">Name</label>
      <input type="text" name="name" required [(ngModel)]="newParking.name " >
    </div>
    
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" name="address" required [(ngModel)]="newParking.address "   >
    </div>
    
 		<div class="form-group">Available
		<label for="available" *ngFor="let option of options">			 
			 <label class="checkbox-inline" >{{option.test}}</label>
			 <input type="radio" name="available"  id="available"   [checked]="option.value===newParking.available" (change)="newParking.available = option.value" >			 
		</label>	 
		</div>	
		
		 <div class="form-group">
      <label for="zip_code">ZIP CODE</label>
      <input type="text" name="zip_code" required [(ngModel)]="newParking.zip_code "  >
    </div>
		
		<div class="form-group">Has Camera
		<label for="has_camera" *ngFor="let option of options">			 
			 <label class="checkbox-inline" >{{option.test}}</label>
			 <input type="radio" name="has_camera"  id="has_camera"   [checked]="option.value===newParking.has_camera" (change)="newParking.has_camera = option.value" >			 
		</label>	 
		</div>	
		
			<div class="form-group">
      <label for="city">City</label>
      <input type="text" name="city" required [(ngModel)]="newParking.city"  >
    </div>
    
		<div class="form-group">Has Watchman
		<label for="has_camera" *ngFor="let option of options">			 
			 <label class="checkbox-inline" >{{option.test}}</label>
			 <input type="radio" name="has_watchman"  id="has_watchman"   [checked]="option.value===newParking.has_watchman" (change)="newParking.has_watchman = option.value" >			 
		</label>	 
		</div>		
		
	 
		
		<div class="form-group">
      <label for="main_picture">Main Picture</label>
      <input type="text" name="main_picture" required [(ngModel)]="newParking.main_picture"  >
    </div>
		
		
		
		<div class="form-group">
      <label for="price_month">Price Month</label>
      <input type="text" name="price_month" required [(ngModel)]="newParking.price_month"  >
    </div>		 
    <button class="btn" type="submit">Add </button>
    <button class="btn" type="reset" (click)="onCancel()"> Cancel </button>
  </form>
   
   </div>
 
	</div>
  </div>
   
  
    `,



})


export class ParkinglistComponent implements OnInit{
  newParking:Parking;
  successSaved:boolean;
  createNewParking:boolean;
  result:string;
  listParkings:Parking[];
  options=[{test:"No",value:false},{test:"Yes",value:true}];
  constructor(private _parkingService:ParkingService, private _activeRoute: ActivatedRoute , private _router: Router){}

  ngOnInit():any {
    this.onListeParking();
    this.createNewParking=false;
    this.successSaved=false;
  }

  onEdit(parkingsId:number) {
    this._router.navigate(['parkingdetail',parkingsId]);


  }
  onUpdate(parkings:Parking){

  }
  onDelete(id:number,index:number){
    this._parkingService.deleteParking(id)
      .subscribe(
        park => this.result = park,
        error=>console.log(error)
      );
    this.listParkings.splice(index,1);
  }
  onCreateParking(){
    this.successSaved=false;
    this.createNewParking=true;
    this.newParking= new Parking();
    this.newParking.available=true;
    this.newParking.has_camera=true;
    this.newParking.has_watchman=false;
  }

  onSubmit() {
    this._parkingService.saveParking( this.newParking)
      .subscribe(
        data => {
          this.onListeParking(),
            this.createNewParking = false,
            this.result = data
        },
        error=>console.log(error)
      );
  }

  private onListeParking(){
    this._parkingService.getAllParkings().map(res=>res.json())
      .subscribe(
        parkingdata => this.listParkings = parkingdata,
        error=>console.log(error)
      );
  }


}

