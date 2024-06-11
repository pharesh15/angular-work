import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  selectedUser = new EventEmitter<number>();
  constructor() {}
}
