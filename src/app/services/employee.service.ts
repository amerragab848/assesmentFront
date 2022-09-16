import { Injectable, Inject } from '@angular/core';
//import {  Http,   RequestOptions,   Response  } from '@angular/http';  
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private myAppUrl = "https://localhost:44398/";
  constructor(private _http: HttpClient) { }

  getEmployeesPaging(pageNumber: number, pageSize: number) {

    return this._http.get(this.myAppUrl + `api/Employee/GetAllPaging?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
  getEmployeeById(id: number) {
    return this._http.get(this.myAppUrl + "api/Employee/GetEmployeeById?id=" + id);
  }
  deleteEmployee(id: number) {
    return this._http.delete(this.myAppUrl + "api/Employee/DeleteEmployee?id=" + id);
  }
  updateEmployee(employee: any) {
    return this._http.post(this.myAppUrl + 'api/Employee/UpdateEmployee', employee);
  }
  saveEmployee(employee: any) {
    return this._http.post(this.myAppUrl + 'api/Employee/AddEmployee', employee);
  }
}
