import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, IUserResponse } from '../models/User.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
        catchError((err) => {
          let errorMessage = 'An unknown erorr occured!';

          if (!err.error || !err.error.error) {
            return throwError(errorMessage);
          } else {
            switch (err.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists';
            }
            return throwError(errorMessage);
          }
        })
      );
  }

  login() {}
}
