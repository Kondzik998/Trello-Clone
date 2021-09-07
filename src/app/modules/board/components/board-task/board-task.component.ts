import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import type { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-board-task',
  templateUrl: './board-task.component.html',
  styleUrls: ['./board-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardTaskComponent {
  @Input() state: Task;
}
