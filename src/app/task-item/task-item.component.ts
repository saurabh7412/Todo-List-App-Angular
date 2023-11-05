import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task | undefined; // Input property to receive the task from the parent component
  @Output() taskUpdated = new EventEmitter<Task | null>(); // Output event to notify the parent component of updates

  editing: boolean = false; // Flag to track if the task is being edited
  editedTask: Task | null = null; // Initialize editedTask as null

  constructor() {}

   // Method to toggle the editing mode
   editTask(): void {
    if (!this.editing) {
      // Enter edit mode
      this.editing = true;
      this.editedTask = { ...this.task } as Task; // Use type assertion to specify the type
    }
  }

  // Method to cancel editing and discard changes
  cancelEdit(): void {
    this.editing = false;
    this.editedTask = null; // Reset the edited task
  }

  // Method to delete the task
  deleteTask(): void {
    this.taskUpdated.emit(null); // Notify the parent component to delete this task
  }
}
