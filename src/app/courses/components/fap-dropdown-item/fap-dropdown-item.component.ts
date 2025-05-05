import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CaretDownQuestionIconComponent } from '../../../shared/icons/caret-down-question-icon/caret-down-question-icon.component';
import { CaretUpIconComponent } from '../../../shared/icons/caret-up-icon/caret-up-icon.component';
import { IFAQ } from '../../interface/secondary-course/FAQ';

@Component({
  selector: 'app-fap-dropdown-item',
  standalone: true,
  imports: [CaretUpIconComponent, CaretDownQuestionIconComponent],
  templateUrl: './fap-dropdown-item.component.html',
  styleUrl: './fap-dropdown-item.component.scss',
})
export class FapDropdownItemComponent {
  @Input() faqItem!: IFAQ;
  @Input() faqIdSelected!: number;
  @Output() questionSelectedEvent = new EventEmitter<number>();

  sendQuestion(freqQuestId: number) {
    if (this.faqIdSelected !== freqQuestId) {
      this.questionSelectedEvent.emit(freqQuestId);
    } else {
      this.questionSelectedEvent.emit(-1);
    }
  }
}
