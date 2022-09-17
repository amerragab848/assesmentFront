import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthenticatedResponse } from '../_interfaces/authenticated-response.model';
import { LoginModel } from '../_interfaces/login.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
//import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean = false;
  credentials: LoginModel = { username: '', password: '' };
  userform: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private router: Router,
    private accountService: AccountService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
   // private messageService: MessageService
    ) {

    this.userform = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  ngOnInit(): void {
  }

  login() {

    if (this.userform.invalid) {
      return;
    }
    // this.accountService.loginuser(this.userform.value)
    //   .subscribe({
    //     next: (response: any) => {
    //       const token = response.token;
    //       localStorage.setItem("jwt", token);
    //       this.invalidLogin = false;
    //       this.router.navigate(["/"]);
    //     },
    //     error: (err: HttpErrorResponse) => this.invalidLogin = true
    //   });

    this.accountService.loginuser(this.userform.value)
      .pipe(first())
      .subscribe(
        data => {
        //  this.messageService.add({ severity: 'success', summary: 'loginuser successfully ', detail: 'loginuser successfully ' });
          const token = data.token;
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;
          this.router.navigate([this.returnUrl]);
        },
        error => {
          //this.alertService.error(error);
          this.loading = false;
        });

    // this.accountService.login(this.credentials).subscribe(res => {
    //   this.val = res;
    // });

  }
}
