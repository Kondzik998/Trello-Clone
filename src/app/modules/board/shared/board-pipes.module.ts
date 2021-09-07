import { NgModule } from '@angular/core';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';

@NgModule({
  imports: [],
  declarations: [ShortDescriptionPipe],
  exports: [ShortDescriptionPipe],
})
export class BoardPipesModules {}
