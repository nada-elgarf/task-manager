import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit , OnChanges {
  @Input() task: Task | null = null;
  @Output() formSubmit = new EventEmitter<Task>();

  taskForm!: FormGroup;

  constructor() {
    this.taskForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      completed: new FormControl(false),
    });
  }

  ngOnInit() {
    this.updateForm();
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['task']) {
      this.updateForm();
    }
  }

  private updateForm() {
    if (this.task) {
      this.taskForm.patchValue({
        title: this.task.title,
        completed: this.task.completed
      });
    } else {
      this.taskForm.reset();
    }
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const taskData: Task = this.taskForm.value;
      if (this.task) {
        taskData.id = this.task.id;
      }
      this.formSubmit.emit(taskData);
      this.taskForm.reset();
    }
  }
}
