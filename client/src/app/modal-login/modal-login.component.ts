import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html'
})

export class ModalLoginComponent implements OnInit {
  hide: boolean;
  email = new FormControl('', [Validators.required, Validators.email]);

  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(
    public dialogRef: MatDialogRef<ModalLoginComponent>,
    private auth: AuthenticationService,
    private router: Router) {}

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.onNoClick();
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
