import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
//import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  id: number = 0;
  userform: FormGroup;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
   // private messageService: MessageService
    ) {
    this.userform = this.fb.group({
      id: [0, [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      departmentName: ['', [Validators.required]],
      salary: [0, [Validators.required]],

    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.userform.get('Id')?.setValue(params['id']);
        this.getById(this.id);
      }
    });
  }

  getById(id: number) {
    this.employeeService.getEmployeeById(this.id).subscribe((res: any) => {
      if (res) {
        this.userform.setValue(res);
      }
    });

  }

  save() {

    if (this.userform.invalid)
      return

    if (this.userform.get('id')?.value === 0) {
      this.employeeService.saveEmployee(this.userform.value).subscribe((res: any) => {
       // this.messageService.add({severity:'success', summary:'added successfully ', detail:'added successfully '});
        this.router.navigate(['/employees']);

      });
    } else {
      this.employeeService.updateEmployee(this.userform.value).subscribe((res: any) => {
        //this.messageService.add({severity:'success', summary:'updated successfully ', detail:'updated successfully '});

        this.router.navigate(['/employees']);

      });
    }

    //Redirecting to user employee page after save or update
  }

}
