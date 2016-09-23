
import {Injectable} from "@angular/core";

import {Http,Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Parking} from "./parking";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class ParkingService {

  getUrlAll="http://localhost:3000/page/parkinglist";
  getUrlOne="http://localhost:3000/page/getparking/";
  postUrl="http://localhost:3000/page/createparking";
  deleteUrl="http://localhost:3000/page/deleteparking/";
  updateUrl="http://localhost:3000/page/updateparking";

  constructor(private _http:Http) {  }

  saveParking(parkingSave: Parking): Observable<any>{
    let headers = new Headers({'Content-Type':'application/json','Accept':'application/json'});
    return this._http.post(this.postUrl,JSON.stringify(parkingSave),{ headers:headers })  ;
  }

  updateParking(parkingUpdate: Parking): Observable<any>{
    let headers = new Headers({'Content-Type':'application/json','Accept':'application/json'});
    return this._http.post(this.updateUrl, JSON.stringify(parkingUpdate),{ headers:headers }) ;
  }

  deleteParking(id: number): Observable<any>{
    let headers = new Headers({'Content-Type':'application/json'});
    return this._http.delete(this.deleteUrl+id,{ headers:headers })  ;
  }
  getAllParkings(): Observable<any>{
    let headers = new Headers({'Content-Type':'application/json'});
    return this._http.get(this.getUrlAll,{ headers:headers });
  }

  getOneParking(id:number): Observable<any>{
    let headers = new Headers({'Content-Type':'application/json'});
    return this._http.get(this.getUrlOne+id,{ headers:headers });
  }




}

