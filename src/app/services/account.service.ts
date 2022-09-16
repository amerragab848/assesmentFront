import { Injectable, Inject } from '@angular/core';
//import {  Http,   RequestOptions,   Response  } from '@angular/http';  
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private myAppUrl = "https://localhost:44398/";
  constructor(private _http: HttpClient) { }

  login(model: any) {
    return this._http.post(this.myAppUrl + 'api/Account/Login', model);

  }
  logout() {
    return this._http.get(this.myAppUrl + "api/Account/LogOut");

  }
  register(model: any) {
    return this._http.post(this.myAppUrl + 'api/Account/Reister', model);
  }
}
