import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

  toggleCompletion(task: Task): void {
    task.completed = !task.completed;
  }

  addTask(task: Task): void {
    if (task.id) {
      const index = this.tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        this.tasks[index] = task;
      }
    } else {
      task.id = this.tasks.length + 1;
      this.tasks.push(task);
    }
    this.selectedTask = null;
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }


}
