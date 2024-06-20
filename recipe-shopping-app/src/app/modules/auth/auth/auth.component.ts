import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Observable } from 'rxjs';
import { IUserResponse } from '../../../models/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isLoginScreen: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  toggleScreen() {
    this.isLoginScreen = !this.isLoginScreen;
  }

  onSubmit(auth: NgForm) {
    if (auth.valid) {
      let authObservable: Observable<IUserResponse>;
      this.isLoading = true;
      const { email, password } = auth.value;

      if (this.isLoginScreen) {
        authObservable = this.authService.login({ email, password });
      } else {
        authObservable = this.authService.signup({ email, password });
      }

      authObservable.subscribe(
        (result) => {
          console.log(result);
          this.isLoading = false;
          this.errorMessage = '';
          this.router.navigate(['/recipes']);
        },
        (errorMessage) => {
          this.isLoading = false;
          this.errorMessage = errorMessage;
        }
      );
    }
  }
}
