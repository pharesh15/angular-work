import { Component, inject } from '@angular/core';
import { AuthService } from '../../guard/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  onLogin() {
    this.authService.login();
  }
}
