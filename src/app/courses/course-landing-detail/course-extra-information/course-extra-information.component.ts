import { Component, Input } from '@angular/core';
import { CaretUpIconComponent } from '../../../shared/icons/caret-up-icon/caret-up-icon.component';
import { IFAQ } from '../../interface/secondary-course/FAQ';

@Component({
  selector: 'app-course-extra-information',
  standalone: true,
  imports: [CaretUpIconComponent],
  templateUrl: './course-extra-information.component.html',
  styleUrl: './course-extra-information.component.css',
})
export class CourseExtraInformationComponent {
  @Input() courseAchievements: string = '';
  @Input() courseBenefits: string[] = [];
  @Input() courseFaqs: IFAQ[] = [];
  @Input() courseSchedule: string = '';
}
