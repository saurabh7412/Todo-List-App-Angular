import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

import { Task } from '../task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }


  onTaskAdded(newTask: Task): void {
    this.tasks.push(newTask); // Add the new task to the list
  }

  // Add methods for marking tasks as completed, editing, and deleting tasks here

  markTaskAsCompleted(task: Task): void {
    task.completed = !task.completed;
  }


  saveTask(task: Task): void {
    task.editing = false;
    // You can also update the task in your service if needed
  }
  
  
  editTask(task: Task): void {
    task.editing = !task.editing;
  }
  
  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    // You can also delete the task from your service if needed
  }



}
