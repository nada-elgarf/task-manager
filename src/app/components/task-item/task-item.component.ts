import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class TaskItemComponent {
  @Input()
  task!: Task;

  @Output()
  toggle: EventEmitter<void> = new EventEmitter();

  @Output()
  delete: EventEmitter<void> = new EventEmitter();


  onToggle(): void {
    this.toggle.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }




}
