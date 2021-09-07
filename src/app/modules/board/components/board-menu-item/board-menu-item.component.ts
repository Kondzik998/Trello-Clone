import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-menu-item',
  templateUrl: './board-menu-item.component.html',
  styleUrls: ['./board-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardMenuItemComponent {
  @Input() icon: string;
  @Input() title?: string;
  @Input() description?: string;
}
