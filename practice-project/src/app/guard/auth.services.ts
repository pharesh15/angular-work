import { Injectable } from '@angular/core';

export class AuthService {
  isLoggedIn: boolean = false;
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 100);
    });
    return promise;
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
