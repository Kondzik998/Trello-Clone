import { templateJitUrl } from '@angular/compiler';
import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import type { Task } from 'src/app/core/models/task.model';
import { BoardFacadeService } from '../../pages/board-page/board-facade.service';

@Component({
  selector: 'app-board-edit-dialog',
  templateUrl: './board-edit-dialog.component.html',
  styleUrls: ['./board-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardEditDialogComponent {
  public editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BoardEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      title: [this.data.title, [Validators.required]],
      description: [this.data.description],
    });
  }

  public onTaskEdit(): void {
    this.dialogRef.close({
      type: 'edit',
      data: {
        ...this.editForm.value,
        status: this.data.status,
        id: this.data.id,
      },
    });
  }

  public onTaskRemove() {
    this.dialogRef.close({
      type: 'delete',
      data: this.data.id,
    });
  }
}
