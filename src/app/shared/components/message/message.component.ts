import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessageComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() showContentModal = false;
  @Output() isClosed = new EventEmitter<boolean>();

  closeModal(event: boolean) {
    this.isClosed.emit(event);
  }

  openContentModal() {
    this.showContentModal = true;
  }
}
