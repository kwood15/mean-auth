import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService, TokenPayload } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name: '';
  hide = true;

  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  ngOnInit() {

  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }
}
