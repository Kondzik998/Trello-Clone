import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-card-button',
  templateUrl: './add-card-button.component.html',
  styleUrls: ['./add-card-button.component.scss'],
})
export class AddCardButtonComponent {
  @Output() opened = new EventEmitter();

  open(): void {
    this.opened.emit();
  }
}
