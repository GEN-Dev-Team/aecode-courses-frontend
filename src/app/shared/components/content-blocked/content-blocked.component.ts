import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-content-blocked',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './content-blocked.component.html',
  styleUrl: './content-blocked.component.css',
})
export class ContentBlockedComponent {
  @Output() isClosed = new EventEmitter<boolean>();

  closeModal() {
    this.isClosed.emit(false);
  }
}
