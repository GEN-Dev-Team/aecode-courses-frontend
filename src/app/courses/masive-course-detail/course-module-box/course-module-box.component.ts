import { Component, inject, Input } from '@angular/core';
import { CourseSessionIconComponent } from '../../../shared/icons/course-session-icon/course-session-icon.component';
import { WatchIconComponent } from '../../../shared/icons/watch-icon/watch-icon.component';
import { ICourse } from '../../interface/Course';
import { BrowserService } from '../../../core/services/browser.service';
import { CourseService } from '../../services/course.service';
import { CourseSessionService } from '../../services/course-session.service';
import { environment } from '../../../../environment/environment';

@Component({
  selector: 'app-course-module-box',
  standalone: true,
  imports: [CourseSessionIconComponent, WatchIconComponent],
  templateUrl: './course-module-box.component.html',
  styleUrl: './course-module-box.component.css',
})
export class CourseModuleBoxComponent {
  @Input() course!: ICourse;

  browserService: BrowserService = inject(BrowserService);
  courseService: CourseService = inject(CourseService);
  courseSessionService: CourseSessionService = inject(CourseSessionService);

  base_url: string = environment.base;

  redirectToCourse(moduleId: number) {
    this.courseSessionService.setModuleSelected(moduleId);

    this.courseService.setShowMasiveCourseBackground(false);
    this.browserService.navigateAndScroll(
      `courses/masive-course-detail/${this.course.courseId}/module/${moduleId}`,
      0
    );
  }
}
