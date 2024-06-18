import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isLoginScreen: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  toggleScreen() {
    this.isLoginScreen = !this.isLoginScreen;
  }

  onSubmit(auth: NgForm) {
    if (auth.valid) {
      this.isLoading = true;
      const { email, password } = auth.value;
      this.authService.signup({ email, password }).subscribe(
        (result) => {
          console.log(result);
          this.isLoading = false;
        },
        (errorMessage) => {
          this.isLoading = false;
          this.errorMessage = errorMessage;
        }
      );
    }
  }
}
