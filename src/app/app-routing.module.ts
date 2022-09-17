import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const employeesModule = () => import('./employees/employee.module').then(x => x.EmployeeModule);

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'employees', loadChildren: employeesModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
   // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
