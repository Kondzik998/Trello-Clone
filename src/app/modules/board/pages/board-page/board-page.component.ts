import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BoardFacadeService } from './board-facade.service';
import { MatDialog } from '@angular/material/dialog';
import type { Column } from 'src/app/core/models/column.model';
import type { Task } from 'src/app/core/models/task.model';
import { BoardEditDialogComponent } from '../../components/board-edit-dialog/board-edit-dialog.component';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardPageComponent implements OnInit {
  public columns$ = this.boardFacade.columns$;

  constructor(
    private boardFacade: BoardFacadeService,
    private matDialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.boardFacade.loadTasks();
  }

  addTask(task: Task): void {
    this.boardFacade.addTask(task);
  }

  public onTaskDropped(event: CdkDragDrop<Column>): void {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data.tasks || [],
        event.container.data.tasks || [],
        event.previousIndex,
        event.currentIndex
      );
      this.boardFacade.patchTask({
        ...event.item.data,
        status: event.container.data.status,
      });
    } else {
      moveItemInArray(
        event.container.data.tasks,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  public onTaskClicked(task: Task): void {
    const dialogRef = this.matDialog.open(BoardEditDialogComponent, {
      width: '350px',
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.type === 'edit') {
        this.boardFacade.patchTask(result.data);
      } else if (result.type === 'delete') {
        this.boardFacade.deleteTask(result.data);
      }
    });
  }
}
