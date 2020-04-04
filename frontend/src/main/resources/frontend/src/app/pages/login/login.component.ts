import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {User} from '../../auth/model/user/user';

import { Role } from '../../auth/model/user/role';
import { AuthService } from '../../auth/auth.service';
import {urlResolver} from './utils/urlResolve'

@Component({ 
    // selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class Login implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    isVaid =false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) {

      // redirect to home if already logged in
      
        let user : User = this.authService.currentUserValue;
        // redirect to home if already logged in
       
        if (user) {
            console.log(urlResolver(user.role))
            this.router.navigate([
                urlResolver(user.role)
            ])
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get formData() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        this.isVaid =false;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authService.login(this.formData.username.value, this.formData.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.loading = false;
                    console.log("user data")
                    this.authService.refreshUserInfo()
                    console.log(this.authService.currentUserValue)
                    this.router.navigate([
                        urlResolver(this.authService.currentUserValue.role)
                    ])
                },
                error => {
                    this.loading = false;
                });
    }
}