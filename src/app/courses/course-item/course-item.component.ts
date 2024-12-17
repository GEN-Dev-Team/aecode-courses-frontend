import { Component, inject, Input } from '@angular/core';
import { LevelIconComponent } from '../../shared/icons/level-icon/level-icon.component';
import { WatchIconComponent } from '../../shared/icons/watch-icon/watch-icon.component';
import { CourseSessionIconComponent } from '../../shared/icons/course-session-icon/course-session-icon.component';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { BrowserService } from '../../core/services/browser.service';
import { defaultCourse, ICourse } from '../interface/Course';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [LevelIconComponent, WatchIconComponent, CourseSessionIconComponent],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
})
export class CourseItemComponent {
  @Input() isPlatformCourse: boolean = false;
  @Input() course: any = {};

  browserService: BrowserService = inject(BrowserService);
  courseService: CourseService = inject(CourseService);

  router: Router = inject(Router);

  showCourseDetails(courseId: number) {
    this.browserService.navigateAndScroll(
      `courses/secondary-course-detail/${courseId}`,
      0
    );
  }

  showMasiveCourseDetails(courseId: number) {
    this.browserService.navigateAndScroll(
      `courses/masive-course-detail/${courseId}`,
      0
    );
  }
}
