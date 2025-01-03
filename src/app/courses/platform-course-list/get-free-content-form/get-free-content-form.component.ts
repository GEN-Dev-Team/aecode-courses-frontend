import { Component, EventEmitter, Output } from '@angular/core';
import { CheckGetFreeFormIconComponent } from '../../../shared/icons/check-get-free-form-icon/check-get-free-form-icon.component';
import { ZoomInDirective } from '../../../shared/directives/animations/zoom-in.directive';
import { SquareIconComponent } from '../../../shared/icons/square-icon/square-icon.component';

@Component({
  selector: 'app-get-free-content-form',
  standalone: true,
  imports: [
    CheckGetFreeFormIconComponent,
    ZoomInDirective,
    SquareIconComponent,
  ],
  templateUrl: './get-free-content-form.component.html',
  styleUrl: './get-free-content-form.component.css',
})
export class GetFreeContentFormComponent {
  @Output() isClosed = new EventEmitter<boolean>();

  isProgrammingSelected: boolean = false;

  sendForm() {
    this.isClosed.emit(false);
  }
}
