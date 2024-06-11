import { EventEmitter, Injectable } from '@angular/core';
import { IAddTask, ITask } from '../models/TaskModel';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  isCompleted = new EventEmitter<number>();
  isAddNewTaskScreenActive = new EventEmitter<boolean>();
  constructor() {}

  handleAddNewTask(taskBody: ITask) {
    const taskData = localStorage.getItem('taskData');
    if (taskData) {
      let parsedData = JSON.parse(taskData);
      parsedData = [...parsedData, taskBody];
      localStorage.setItem('taskData', JSON.stringify(parsedData));
    } else {
      localStorage.setItem('taskData', JSON.stringify(taskBody));
    }
    // tasksData = [...tasksData, taskBody];
  }
}
