import { Component, inject, Input } from '@angular/core';
import { LevelIconComponent } from '../../shared/icons/level-icon/level-icon.component';
import { WatchIconComponent } from '../../shared/icons/watch-icon/watch-icon.component';
import { CourseSessionIconComponent } from '../../shared/icons/course-session-icon/course-session-icon.component';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [LevelIconComponent, WatchIconComponent, CourseSessionIconComponent],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
})
export class CourseItemComponent {
  @Input() isPlatformCourse: boolean = false;

  courseService: CourseService = inject(CourseService);

  router: Router = inject(Router);

  showCourseDetails(courseId: number) {
    this.router.navigate([`courses/course-detail/${courseId}`]);
    this.courseService.setShowAsyncCourseDetails(true);
    window.scrollTo(0, 0);
  }

  showMasiveCourseDetails(courseId: number) {
    this.router.navigate([`courses/course-detail/${courseId}`]);
    this.courseService.setShowMasiveCourseDetails(true);
    this.courseService.setShowMasiveCourseBackground(true);
    window.scrollTo(0, 0);
  }
}
