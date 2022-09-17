import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../_interfaces/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  first = 0;
  rows = 10;
  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAll()
  }

  next() {
    this.first = this.first + this.rows;
  }
  prev() {
    this.first = this.first - this.rows;
  }
  reset() {
    this.first = 0;
  }
  isLastPage(): boolean {
    return this.employeeList ? this.first === (this.employeeList.length - this.rows) : true;
  }
  isFirstPage(): boolean {
    return this.employeeList ? this.first === 0 : true;
  }
  getAll() {
    this.employeeService.getEmployeesPaging(this.first, this.rows).subscribe((res: any) => {
      this.employeeList = res;
    });
  }
  remove(id: number) {
    this.employeeService.deleteEmployee(id).subscribe((res: any) => {
      //this.employeeList = res;
      this.getAll()
    });
   
  }

}
