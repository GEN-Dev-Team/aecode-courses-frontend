import { Component, Input } from '@angular/core';
import { IFAQ } from '../../interface/secondary-course/FAQ';
import { ITool } from '../../interface/secondary-course/Tool';
import { FapDropdownItemComponent } from './fap-dropdown-item/fap-dropdown-item.component';

@Component({
  selector: 'app-course-extra-information',
  standalone: true,
  imports: [FapDropdownItemComponent],
  templateUrl: './course-extra-information.component.html',
  styleUrl: './course-extra-information.component.css',
})
export class CourseExtraInformationComponent {
  @Input() courseAchievements: string = '';
  @Input() courseBenefits: string[] = [];
  @Input() courseFaqs: IFAQ[] = [];
  @Input() toolList!: ITool[];

  freqQuestIdSelected!: number;

  loopList: number[] = [1, 2, 3];

  selectQuestion(freqQuestId: number) {
    this.freqQuestIdSelected = freqQuestId;
  }
}
