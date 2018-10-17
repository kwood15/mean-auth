import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(public auth: AuthenticationService) {}

  toggleNavbar() {
    const navbarToggle = document.querySelector('.navbar-burger');
    navbarToggle.addEventListener('click', () => {
      const target = navbarToggle.getAttribute('data-target');
      const navbar = document.getElementById(target);
      navbarToggle.classList.toggle('is-active');
      navbar.classList.toggle('is-active');
    });
  }
}
