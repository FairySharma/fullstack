import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CiAgentComServiceService {

  constructor(private http: HttpClient) { }

  dateRangeFilterFun(dateSelectValue) {
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', '/application/json');
    // return this.http.post("",userauth,{headers:headers}).pipe(map(res => res));
    return this.http.post("",dateSelectValue).pipe(map(res => res));
  }

  selectCountryFun(countryValue) {
    return this.http.post("",countryValue).pipe(map(res => res));
  }


  minPercentFun(minValue) {
    return this.http.post("",minValue).pipe(map(res => res));
  }

  maxPercentFun(maxValue) {
    return this.http.post("",maxValue).pipe(map(res => res));
  }

  initialAPICall(){
    return this.http.get("assets/db.json")
  }


}
