import { Component, inject, Input } from '@angular/core';
import { CourseSessionIconComponent } from '../../../shared/icons/course-session-icon/course-session-icon.component';
import { WatchIconComponent } from '../../../shared/icons/watch-icon/watch-icon.component';
import { ICourse } from '../../interface/Course';
import { BrowserService } from '../../../core/services/browser.service';
import { CourseService } from '../../services/course.service';
import { CourseSessionService } from '../../services/course-session.service';
import { defaultSession } from '../../interface/Session';
import { AddBaseUrlPipe } from '../../../core/pipes/add-base-url.pipe';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-course-module-box',
  standalone: true,
  imports: [CourseSessionIconComponent, WatchIconComponent, AddBaseUrlPipe],
  templateUrl: './course-module-box.component.html',
  styleUrl: './course-module-box.component.css',
})
export class CourseModuleBoxComponent {
  @Input() course!: ICourse;

  browserService: BrowserService = inject(BrowserService);
  authService: AuthService = inject(AuthService);
  courseService: CourseService = inject(CourseService);
  courseSessionService: CourseSessionService = inject(CourseSessionService);

  redirectToCourse(moduleId: number) {
    this.courseSessionService.setModuleSelected(moduleId);
    this.courseSessionService.setCourseSessionDetails(defaultSession);
    this.authService.setAccessToCourse(this.course.courseId);
    this.authService.setAccessToModule(moduleId);

    console.log(
      'Access to course:',
      this.course.courseId,
      ': ',
      this.authService.getAccessToCourse()
    );
    console.log(
      'Access to module:',
      moduleId,
      ': ',
      this.authService.getAccessToModule()
    );

    this.browserService.navigateAndScroll(
      `courses/masive-course-detail/${this.course.courseId}/module/${moduleId}`,
      0
    );
  }
}
