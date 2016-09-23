import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ParkingService} from "./parking/parking.service";
import {Parking} from "./parking/parking";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Component({
  selector: 'my-editor',
  template: `
        <div class="container">
    <div class="page-header">
      <h1>Edite Parking </h1>
      <p class="lead">Edite Parking</p>
    </div>
   <div class="container">
    <div>
    <form (ngSubmit)="onSubmit()"  >
    
		<div class="form-group">
      <label for="name">Name</label>
      <input type="text" name="name" required [(ngModel)]="selectedParkings.name "   >
    </div>
    
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" name="address" required [(ngModel)]="selectedParkings.address "   >
    </div>
    
    
		<div class="form-group">Available
		<label for="available" *ngFor="let option of options">			 
			 <label class="checkbox-inline" >{{option.test}}</label>
			 <input type="radio" name="available"  id="available"   [checked]="option.value===selectedParkings.available" (change)="selectedParkings.available = option.value" >			 
		</label>	 
		</div>	
		 <div class="form-group">
      <label for="zip_code">ZIP CODE</label>
      <input type="text" name="zip_code" required  [(ngModel)]="selectedParkings.zip_code "   >
    </div>
		
	 
			<div class="form-group">
      <label for="city">City</label>
      <input type="text" name="city" required  [(ngModel)]="selectedParkings.city"   >
    </div>
		
	 
		<div class="form-group">Has Watchman
		<label for="has_camera" *ngFor="let option of options">			 
			 <label class="checkbox-inline" >{{option.test}}</label>
			 <input type="radio" name="has_watchman"  id="has_watchman"   [checked]="option.value===selectedParkings.has_watchman" (change)="selectedParkings.has_watchman = option.value" >			 
		</label>	 
		</div>		
		
		<div class="form-group">
      <label for="main_picture">Main Picture</label>
      <input type="text" name="main_picture" required  [(ngModel)]="selectedParkings.main_picture"   >
    </div>
     
    
    
    		
		<div class="form-group">Has Camera
		<label for="has_camera" *ngFor="let option of options">			 
			 <label class="checkbox-inline" >{{option.test}}</label>
			 <input type="radio" name="has_camera"  id="has_camera"   [checked]="option.value===selectedParkings.has_camera" (change)="selectedParkings.has_camera = option.value" >			 
		</label>	 
		</div>			
		<div class="form-group">
      <label for="price_month">Price Month</label>
      <input type="text" name="price_month" required  [(ngModel)]="selectedParkings.price_month"   >
    </div>		 
    <button class="btn" type="submit"> Update </button>
    <button class="btn" type="reset" (click)="onCancel()"> Cancel </button>
  </form>
</div>
	</div>
  </div>
  
 
    `,


})


export class ParkingdetailComponent implements OnInit{


  options=[{test:"No",value:false},{test:"Yes",value:true}];
  result:string;
  sub: any;
  selectedParkings=new Parking();
  selectedParkingsId:number;
  constructor(private _parkingService:ParkingService, private _activatedRoute: ActivatedRoute,private _router:Router ){}

  ngOnInit():any {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.selectedParkingsId = +params['id'];
      if(this.selectedParkingsId!==null){
        this._parkingService.getOneParking(this.selectedParkingsId )
          .map(res=>res.json())
          .subscribe(
            data => {
              this.selectedParkings =data
            },
            error=>console.log(error)
          );
      }
    });
  }




  onSubmit() {
    this._parkingService.updateParking(this.selectedParkings)
      .subscribe(
        parking => {
          this.navigateBack(),
            this.result = parking
        },
        error=>console.log(error)
      );
  }

  private navigateBack(){
    this._router.navigate(['parkinglist']);
  }
  private onCancel(){
    this.navigateBack();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
