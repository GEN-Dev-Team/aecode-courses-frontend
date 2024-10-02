import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-class-question',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './class-question.component.html',
  styleUrl: './class-question.component.css'
})
export class ClassQuestionComponent {
  @Output() isClosed = new EventEmitter<boolean>();

  closeModal() {
    this.isClosed.emit(false);
  }
}
