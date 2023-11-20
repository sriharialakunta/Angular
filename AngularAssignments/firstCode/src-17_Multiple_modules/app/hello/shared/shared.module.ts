import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderlineDirective } from './underline.directive';
import { HelloComponent } from '../hello.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloComponent, UnderlineDirective],
  exports: [HelloComponent, UnderlineDirective],
})
export class SharedModule {}
