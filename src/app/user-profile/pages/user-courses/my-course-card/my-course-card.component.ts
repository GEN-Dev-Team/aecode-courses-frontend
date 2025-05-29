import { Component, inject, Input } from '@angular/core';
import { ArrowRightComponent } from '../../../../not-available-mobile/icons/arrow-right/arrow-right.component';
import { CourseCompleteIconComponent } from '../../../icons/course-complete-icon/course-complete-icon.component';
import { InProgressIconComponent } from '../../../icons/in-progress-icon/in-progress-icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-course-card',
  standalone: true,
  imports: [
    ArrowRightComponent,
    CourseCompleteIconComponent,
    InProgressIconComponent,
  ],
  templateUrl: './my-course-card.component.html',
  styleUrl: './my-course-card.component.scss',
})
export class MyCourseCardComponent {
  @Input() course: any;

  router = inject(Router);

  goToCourse() {
    this.router.navigate([
      `/training/my-courses/${this.course.seccourseId}/${this.course.urlname}`,
    ]);
  }
}
