import { Component, Input } from '@angular/core';
import { ITask } from '../../../models/TaskModel';
import { TasksService } from '../../../services/tasks.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;

  constructor(private tasksService: TasksService) {}

  ngCompleteTask() {
    this.tasksService.isCompleted.emit(this.task.id);
  }
}
