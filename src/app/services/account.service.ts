import { Injectable, Inject } from '@angular/core';
//import {  Http,   RequestOptions,   Response  } from '@angular/http';  
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private _http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();
  }

  login(model: any) {
    return this._http.post(`${environment.apiUrl}/api/Account/Login`, model);

  }

  loginuser(model: any) {
    return this._http.post<User>(`${environment.apiUrl}/api/Account/Login`, model)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null!);
    //this.router.navigate(['/account/login']);
    return this._http.get(`${environment.apiUrl}/api/Account/LogOut`);


  }
  register(model: any) {
    return this._http.post(`${environment.apiUrl}/api/Account/Reister`, model);
  }
}
