import { Injectable } from '@angular/core';
import { TasksClientService } from '../../client/tasks-client.service';
import { BoardService } from '../../services/board.service';
import type { Task } from 'src/app/core/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class BoardFacadeService {
  public columns$ = this.boardService.columns$;

  constructor(
    private boardService: BoardService,
    private taskClient: TasksClientService
  ) {}

  public loadTasks(): void {
    this.taskClient.get().subscribe((tasks) => {
      this.boardService.initialize(tasks);
    });
  }

  public addTask(task: Task): void {
    this.taskClient.post(task).subscribe((_) => {
      this.loadTasks();
    });
  }

  public patchTask(task: Task): void {
    this.taskClient.patch(task).subscribe((_) => {
      this.loadTasks();
    });
  }

  public deleteTask(taskId: number): void {
    this.taskClient.delete(taskId).subscribe((_) => {
      this.loadTasks();
    });
  }
}
