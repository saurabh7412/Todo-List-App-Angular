import { Component, Output, EventEmitter } from '@angular/core';

import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})





export class TodoFormComponent {
  newTask: Task = new Task();

  constructor(private taskService: TaskService) {}

  @Output() taskAdded = new EventEmitter<Task>();


  addTask(): void {
    if (this.newTask.title) {
      this.taskService.addTask(this.newTask);
      this.taskAdded.emit(this.newTask); // Emit the event
      this.newTask = new Task(); // Reset the form
    }
  }
  
}