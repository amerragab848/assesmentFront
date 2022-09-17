import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './account/login.component';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from './guards/auth.guard';
import { EmployeesComponent } from './employees/employees.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
//

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RegisterComponent } from './account/register/register.component';
import { LayoutComponent } from './account/layout/layout.component';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './guards/jwt.interceptor';
import { ErrorInterceptor } from './guards/error.interceptor';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // EmployeesComponent,
    HomeComponent,
    NavBarComponent,
    // AddEmployeeComponent,
    // RegisterComponent,
    // LayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.apiUrl],
        disallowedRoutes: []
      }
    }),
    //BrowserModule,
    //BrowserModule,
    AppRoutingModule,

    // BrowserAnimations Modules
    BrowserAnimationsModule,

    //  PrimeNG  Modules
    ButtonModule,
    TableModule,
    CalendarModule,
    SliderModule,

    //  Angular Form Modules
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
