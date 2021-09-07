import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardRoutingModule } from './board-routing.module';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { BoardColumnComponent } from './components/board-column/board-column.component';
import { BoardTaskComponent } from './components/board-task/board-task.component';
import { SnackBarService } from '../../shared/snack-bar.service';
import { BoardEditDialogComponent } from './components/board-edit-dialog/board-edit-dialog.component';
import { AddCardButtonComponent } from './components/add-card-button/add-card-button.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BoardHeaderComponent } from './components/board-header/board-header.component';
import { BoardPipesModules } from './shared/board-pipes.module';
import { AddCardFormComponent } from './components/add-card-form/add-card-form.component';
import { BoardMenuItemComponent } from './components/board-menu-item/board-menu-item.component';
import { BoardHeaderMenuComponent } from './components/board-header-menu/board-header-menu.component';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatDialogModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [
    BoardPageComponent,
    BoardColumnComponent,
    BoardTaskComponent,
    BoardHeaderComponent,
    BoardEditDialogComponent,
    AddCardButtonComponent,
    AddCardFormComponent,
    BoardMenuItemComponent,
    BoardHeaderMenuComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES,
    DragDropModule,
    BoardRoutingModule,
    BoardPipesModules,
  ],
  providers: [SnackBarService],
})
export class BoardModule {}
