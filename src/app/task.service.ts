import { Injectable } from '@angular/core';

import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})




export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    // Initialize tasks (you can add some default tasks here)
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    // Implement logic to add a new task to the tasks array
  }

  updateTask(task: Task): void {
    // Implement logic to update a task (mark as completed or edit details)
  }

  deleteTask(task: Task): void {
    // Implement logic to delete a task from the tasks array
  }
}


