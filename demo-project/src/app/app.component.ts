import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { UsersComponent } from './components/shared/users/users.component';
import { IUser } from './models/UserModel';
import { UserTasksComponent } from './components/pages/user-tasks/user-tasks.component';
import { ITask } from './models/TaskModel';
import { TasksService } from './services/tasks.service';
import { AddTaskComponent } from './components/pages/add-task/add-task.component';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HeaderComponent,
    UsersComponent,
    UserTasksComponent,
    AddTaskComponent,
  ],
})
export class AppComponent {
  title = 'demo-project';
  userData: IUser | undefined;
  users: IUser[] = [
    {
      id: 1,
      name: 'Haresh Prajapati',
      img: 'user1.jpg',
    },
    {
      id: 2,
      name: 'Mohit Chauhan',
      img: 'user2.jpg',
    },
    {
      id: 3,
      name: 'Manav Patel',
      img: 'user3.jpg',
    },
    {
      id: 4,
      name: 'Devarshi Mistri',
      img: 'user4.jpg',
    },
  ];

  constructor(private usersService: UsersService) {}

  ngSelectedeUser(event: IUser) {
    this.usersService.selectedUser.emit(event.id);
    this.userData = event;
  }
}
