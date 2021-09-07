import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import type { Column } from 'src/app/core/models/column.model';
import type { Task } from 'src/app/core/models/task.model';
import { Columns } from 'src/app/core/models/columns.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private state$: BehaviorSubject<Column[]> = new BehaviorSubject(<Column[]>[]);

  public columns$ = this.state$.asObservable().pipe(distinctUntilChanged());

  public initialize(tasks: Task[]): void {
    this.state$.next(
      (Object.keys(Columns) as (keyof typeof Columns)[]).reduce(
        (acc, column) => [
          ...acc,
          {
            status: column,
            title: Columns[column],
            tasks: this.getTasksByColumn(tasks, column),
          },
        ],
        <Column[]>[]
      )
    );
  }

  private getTasksByColumn(tasks: Task[], status: string): Task[] {
    return tasks.filter((task) => task.status === status);
  }
}
