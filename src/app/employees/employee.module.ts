import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeesComponent } from './employees.component';
import { HttpClientModule } from '@angular/common/http';
//

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
//import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EmployeeRoutingModule,
       // HttpClientModule,
      
        FormsModule,
        // JwtModule.forRoot({
        //   config: {
        //     tokenGetter: tokenGetter,
        //     allowedDomains: [environment.apiUrl],
        //     disallowedRoutes: []
        //   }
        // }),
       // BrowserModule,
    
        // BrowserAnimations Modules
       // BrowserAnimationsModule,
    
        //  PrimeNG  Modules
        ButtonModule,
        TableModule,
        CalendarModule,
        SliderModule,
    ],
    declarations: [
        LayoutComponent,
        AddEmployeeComponent,
        EmployeesComponent
    ]
})
export class EmployeeModule { }