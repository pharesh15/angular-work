import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../../models/UserModel';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  // getting data provided from parent component
  // required:true indicates that the data must be passed in component
  @Input({ required: true }) data!: IUser;
  @Output() selectedUser = new EventEmitter<IUser>();

  ngSelectUser() {
    this.selectedUser.emit(this.data);
  }
}
