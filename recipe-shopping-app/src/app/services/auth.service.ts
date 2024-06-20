import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, IUserResponse, User } from '../models/User.model';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  tokenExiprationTimer: any;
  constructor(private http: HttpClient, private router: Router) {}

  signup(body: IUser) {
    return this.http
      .post<IUserResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBCYyFovVH5ZOPLale6hs1SnTPNPJx_GbA',
        {
          ...body,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((response) => {
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        })
      );
  }

  login(body: IUser) {
    return this.http
      .post<IUserResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBCYyFovVH5ZOPLale6hs1SnTPNPJx_GbA',
        {
          ...body,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((response) => {
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        })
      );
  }

  handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  autoLogin() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedData: {
        email: string;
        id: string;
        _token: string;
        _tokenExpirationDate: Date;
      } = JSON.parse(userData);
      const loadedUser = new User(
        parsedData.email,
        parsedData.id,
        parsedData._token,
        new Date(parsedData._tokenExpirationDate)
      );

      if (loadedUser.token) {
        this.user.next(loadedUser);
        const expirationDuration =
          new Date(parsedData._tokenExpirationDate).getTime() -
          new Date().getTime();
        this.autoLogout(expirationDuration);
      }
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExiprationTimer) {
      clearTimeout(this.tokenExiprationTimer);
    }
    this.tokenExiprationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExiprationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = 'An unknown erorr occured!';
    console.log(err);
    if (!err.error || !err.error.error) {
      return throwError(errorMessage);
    } else {
      switch (err.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email already exists';
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
          errorMessage = 'Incorrect email or password';
          break;
      }
      return throwError(errorMessage);
    }
  }
}
