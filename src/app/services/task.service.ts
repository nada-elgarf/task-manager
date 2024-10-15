import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

    getTasks():Observable<Task[]> {
      const tasks :Task[] = [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: false },
        { id: 3, title: 'Task 3', completed: true },
      ];
      return of(tasks)
    }
}
