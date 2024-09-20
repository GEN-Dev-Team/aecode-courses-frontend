import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AccCreatedIconComponent } from '../../icons/acc-created-icon/acc-created-icon.component';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [ButtonComponent, AccCreatedIconComponent],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent {
  @Output() openModal = new EventEmitter<boolean>();

  closeModal() {
    this.openModal.emit(false);
  }
}
