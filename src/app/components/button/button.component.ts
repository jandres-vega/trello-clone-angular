import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html'
})
export class ButtonComponent {

  @Input({required: true}) typeBtn:'button'|'reset'|'submit' = 'button'
  @Input() customClass: string = ''
}
