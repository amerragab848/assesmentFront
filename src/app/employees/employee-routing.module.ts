import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeesComponent } from './employees.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: EmployeesComponent },
            { path: 'add-employee', component: AddEmployeeComponent },
            { path: 'update-employee/:id', component: AddEmployeeComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }