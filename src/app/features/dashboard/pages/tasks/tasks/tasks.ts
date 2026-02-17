import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone:true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports:[CommonModule,FormsModule],
})
export class TasksComponent implements OnInit {

  loading = false;

  tasks = [
    { id: 1, title: 'Create Invoice UI', priority: 'High', status: 'Pending' },
    { id: 2, title: 'Dashboard Design', priority: 'Medium', status: 'In Progress' },
    { id: 3, title: 'Login Bug Fix', priority: 'Low', status: 'Done' }
  ];

  editingTaskId: number | null = null;

  ngOnInit() {
    setTimeout(() => {
      this.loading = true;
    }, 1000);
  }

  editTask(taskId: number) {
    this.editingTaskId = taskId;
  }

  saveTask() {
    this.editingTaskId = null;
  }

  cancelEdit() {
    this.editingTaskId = null;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
