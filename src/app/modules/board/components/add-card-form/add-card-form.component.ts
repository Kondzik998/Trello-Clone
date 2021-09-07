import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import type { Task } from '../../../../core/models/task.model';
import { Columns } from 'src/app/core/models/columns.model';

@Component({
  selector: 'app-add-card-form',
  templateUrl: './add-card-form.component.html',
  styleUrls: ['./add-card-form.component.scss'],
})
export class AddCardFormComponent {
  @Output() taskAdded = new EventEmitter<Task>();
  @Output() closed = new EventEmitter();
  taskTitle = new FormControl('');

  public submit(): void {
    this.taskAdded.emit({
      title: this.taskTitle.value,
      description: '',
      status: '',
    });
  }

  public close(): void {
    this.closed.emit();
  }
}
