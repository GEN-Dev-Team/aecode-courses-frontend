import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Output() isClosed = new EventEmitter<boolean>();
  closeModal() {
    this.isClosed.emit(false);
  }
}
