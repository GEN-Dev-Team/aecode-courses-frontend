import { Component, inject } from '@angular/core';
import { CourseSessionIconComponent } from '../../../shared/icons/course-session-icon/course-session-icon.component';
import { WatchIconComponent } from '../../../shared/icons/watch-icon/watch-icon.component';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-free-module',
  standalone: true,
  imports: [CourseSessionIconComponent, WatchIconComponent],
  templateUrl: './free-module.component.html',
  styleUrl: './free-module.component.css',
})
export class FreeModuleComponent {
  router: Router = inject(Router);
  courseService: CourseService = inject(CourseService);

  redirectToCourse(courseId: number) {
    this.router.navigate([`courses/course-detail/${courseId}`]);
    this.courseService.setShowMasiveCourseBackground(false);
    this.courseService.setShowMasiveCourseModule(true);
    window.scrollTo(0, 0);
  }
}
