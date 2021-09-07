import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-board-header-menu',
  templateUrl: './board-header-menu.component.html',
  styleUrls: ['./board-header-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardHeaderMenuComponent {
  @Output() close = new EventEmitter<unknown>();

  closeMenu() {
    this.close.emit();
  }
}
