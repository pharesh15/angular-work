import { Component, Input } from '@angular/core';
import { IUser } from '../../../models/UserModel';
import { TaskComponent } from '../../shared/task/task.component';
import { IAddTask, ITask } from '../../../models/TaskModel';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TasksService } from '../../../services/tasks.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  @Input({ required: true }) data!: IUser;
  usersTasksData: ITask[] | undefined;
  isAddNewTaskScreenActive: boolean = false;

  tasksData: ITask[] = [
    {
      id: 1,
      user_id: 1,
      title: 'Angular',
      summary:
        'Learn basics to advance all the concepts of javascript and angular with typescript as soon as possible',
      due_date: '2024-06-02',
    },
    {
      id: 2,
      user_id: 1,
      title: 'Angular',
      summary:
        'Learn basics to advance all the concepts of javascript and angular with typescript as soon as possible',
      due_date: '2024-06-02',
    },
    {
      id: 3,
      user_id: 2,
      title: 'Angular',
      summary:
        'Learn basics to advance all the concepts of javascript and angular with typescript as soon as possible',
      due_date: '2024-06-02',
    },
    {
      id: 4,
      user_id: 2,
      title: 'Angular',
      summary:
        'Learn basics to advance all the concepts of javascript and angular with typescript as soon as possible',
      due_date: '2024-06-02',
    },
    {
      id: 5,
      user_id: 2,
      title: 'Angular',
      summary:
        'Learn basics to advance all the concepts of javascript and angular with typescript as soon as possible',
      due_date: '2024-06-02',
    },
    {
      id: 6,
      user_id: 3,
      title: 'Angular',
      summary:
        'Learn basics to advance all the concepts of javascript and angular with typescript as soon as possible',
      due_date: '2024-06-02',
    },
  ];

  constructor(
    private tasksService: TasksService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.tasksService.isAddNewTaskScreenActive.subscribe((val) => {
      this.isAddNewTaskScreenActive = val;
    });

    this.usersService.selectedUser.subscribe((id) => {
      console.log(id);
      this.usersTasksData = this.tasksData.filter(
        (task) => task.user_id === id
      );
    });

    this.tasksService.isCompleted.subscribe((id) => {
      this.usersTasksData = this.usersTasksData?.filter(
        (task) => task.id !== id
      );
    });
  }

  ngAddTask(body: IAddTask) {
    let taskData: ITask = {
      ...body,
      user_id: this.data.id,
      id: this.tasksData[this.tasksData.length - 1].id + 1,
    };
    this.tasksData = [...this.tasksData, taskData];
  }

  ngOpenAddNewTaskScreen() {
    this.isAddNewTaskScreenActive = true;
  }
}
