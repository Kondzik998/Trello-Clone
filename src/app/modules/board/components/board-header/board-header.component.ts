import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.scss'],
})
export class BoardHeaderComponent implements OnInit {
  constructor() {}
  display = false;
  clicked: boolean = false;
  colorClass: string = 'color1';
  ngOnInit(): void {}

  change() {
    this.clicked = !this.clicked;
    if (this.clicked) {
      this.colorClass = 'color2';
    } else this.colorClass = 'color1';
  }

  onPress() {
    this.display = !this.display;
  }
}
