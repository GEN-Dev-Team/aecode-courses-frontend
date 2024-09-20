import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SquareIconComponent } from '../../shared/icons/square-icon/square-icon.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [SquareIconComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Input() userMessage: string = '';
  @Output() openModal = new EventEmitter<boolean>();

  closeModal() {
    this.openModal.emit(false);
  }
}
