import { Component, inject, Input } from '@angular/core';
import { IFAQ } from '../../interface/secondary-course/FAQ';
import { ITool } from '../../interface/secondary-course/Tool';
import { FapDropdownItemComponent } from './fap-dropdown-item/fap-dropdown-item.component';
import { AsyncPipe } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-course-extra-information',
  standalone: true,
  imports: [FapDropdownItemComponent, AsyncPipe],
  templateUrl: './course-extra-information.component.html',
  styleUrl: './course-extra-information.component.css',
})
export class CourseExtraInformationComponent {
  @Input() courseAchievements: string = '';
  @Input() courseBenefits: string[] = [];
  @Input() courseFaqs: IFAQ[] = [];
  @Input() toolList!: ITool[];

  themeService: ThemeService = inject(ThemeService);

  freqQuestIdSelected!: number;

  loopList: number[] = [1, 2, 3];

  selectQuestion(freqQuestId: number) {
    this.freqQuestIdSelected = freqQuestId;
  }
}
