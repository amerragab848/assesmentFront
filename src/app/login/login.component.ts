import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthenticatedResponse } from './../_interfaces/authenticated-response.model';
import { LoginModel } from './../_interfaces/login.model';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean=false;
  credentials: LoginModel = {username:'', password:''};

  constructor(private router: Router,private accountService: AccountService) { }
  ngOnInit(): void {
  }

  login = ( form: NgForm) => {
    if (form.valid) {
     this.accountService.login(this.credentials)
      .subscribe({
        next: (response: any) => {
          const token = response.token;
          localStorage.setItem("jwt", token); 
          this.invalidLogin = false; 
          this.router.navigate(["/"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })

      // this.accountService.login(this.credentials).subscribe(res => {
      //   this.val = res;
      // });
    }
  }
}
