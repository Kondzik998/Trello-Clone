import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import type { Column } from 'src/app/core/models/column.model';
import type { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardColumnComponent {
  isAddFormOpened: boolean = false;
  @Input() state: Column;
  @Output() taskDropped = new EventEmitter<CdkDragDrop<Column>>();
  @Output() taskClicked = new EventEmitter<Task>();
  @Output() taskAdded = new EventEmitter<Task>();

  public drop(event: CdkDragDrop<Column>): void {
    this.taskDropped.emit(event);
  }

  public onClickTask(task: Task): void {
    this.taskClicked.emit(task);
  }

  public addTask(task: Task): void {
    this.taskAdded.emit({
      ...task,
      status: this.state.status,
    });
  }
}
