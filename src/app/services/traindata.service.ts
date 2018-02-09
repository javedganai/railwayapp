import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Headers, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
@Injectable()
export class TraindataService {

  constructor(private http:HttpClient) { }

  getstation(src,dest,date) : Observable<any> {

    // ...using get request
    return this.http.get('https://api.railwayapi.com/v2/between/source/'+src+'/dest/'+dest+'/date/'+date+'/apikey/talu45v8xo/')
                   // ...and calling .json() on the response to return data
                  .map((res:any) => res)
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}


}
