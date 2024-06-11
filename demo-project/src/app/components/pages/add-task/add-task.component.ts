import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../../../services/tasks.service';
import { IAddTask, ITask } from '../../../models/TaskModel';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({ required: true }) user_id!: number;
  @Output() addTaskData = new EventEmitter<IAddTask>();
  constructor(private tasksService: TasksService) {}
  fb = inject(FormBuilder);

  addTaskForm = this.fb.group({
    title: [
      '',
      [
        Validators.required, // required field
        Validators.minLength(2), // minimum length of input
      ],
    ],
    summary: ['', [Validators.required, Validators.minLength(2)]],
    due_date: ['', [Validators.required]],
  });

  ngAddTask(): void {
    if (this.addTaskForm.valid) {
      const body: IAddTask = {
        title: this.addTaskForm.value.title!.trim(),
        summary: this.addTaskForm.value.summary!.trim(),
        due_date: this.addTaskForm.value.due_date!,
      };
      this.addTaskData.emit(body);
      this.closeAddNewTaskScreen();
    }
  }

  closeAddNewTaskScreen() {
    this.tasksService.isAddNewTaskScreenActive.emit(false);
  }
}
