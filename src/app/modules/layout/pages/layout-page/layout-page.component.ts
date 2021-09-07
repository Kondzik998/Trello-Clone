import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  template: `<app-header></app-header>
    <ng-content></ng-content>
    <app-footer></app-footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent {}
