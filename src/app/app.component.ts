import {Component} from '@angular/core';



import {ParkingService} from "./parking/parking.service";




@Component({
  selector: 'app-root',
  template: `<!-- NAVBAR-================================================== -->
<body>
<div class="container">
<div class="navbar-wrapper">
  <div class="container">

    <nav class="navbar navbar-inverse navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                  aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">YesParking</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>         
          <a class="navbar-brand" [routerLink]="['/parkinglist']">YesParking</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a  [routerLink]="['/parkinglist']">Parkings</a></li>
            <li><a  [routerLink]="['/parkingMap']">Map</a></li>                        
          </ul>           
        </div>
      </div>
    </nav>
  </div>
</div>

<div class="container-wrapper">
<!-- End NAVBAR-================================================== -->
 <div class="main">   
       <router-outlet></router-outlet>   
 </div>
  <!-- FOOTER -->
  <footer>
    <p class="pull-right"><a href="#">Back to top</a></p>
    <p>&copy; 2016 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>

</div><!-- /.container -->
</div>
    `,

})

export class AppComponent {


}


