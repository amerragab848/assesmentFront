

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
//import { MessageService } from 'primeng/api';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading: boolean = false;
    submitted: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
       // private messageService: MessageService
    ) {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            userName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit() {

    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.register(this.form.value)
            .subscribe(
                data => {
                   // this.messageService.add({ severity: 'success', summary: 'registered successfully ', detail: 'registered successfully ' });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error => {
                    this.loading = false;
                });
    }
}