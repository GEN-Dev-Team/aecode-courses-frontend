import { Component, inject } from '@angular/core';
import { CourseAsideComponent } from './course-aside/course-aside.component';
import { CourseLandingDetailComponent } from './course-landing-detail/course-landing-detail.component';
import { CourseMainComponent } from './course-main/course-main.component';
import { CourseService } from './services/course.service';
import { MasiveCourseDetailComponent } from './masive-course-detail/masive-course-detail.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CourseAsideComponent,
    CourseLandingDetailComponent,
    CourseMainComponent,
    MasiveCourseDetailComponent,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  courseService: CourseService = inject(CourseService);

  showAsyncCourseDetails: boolean = false;
  showMasiveCourseDetails: boolean = false;
  showMasiveCourseBackground: boolean = false;

  ngOnInit(): void {
    this.courseService.showAsyncCourseDetails$.subscribe((state) => {
      this.showAsyncCourseDetails = state;
      window.scrollTo(0, 0);
    });

    this.courseService.showMasiveCourseDetails$.subscribe((state) => {
      this.showMasiveCourseDetails = state;
      window.scrollTo(0, 0);
    });

    this.courseService.showMasiveCourseBackground$.subscribe((state) => {
      this.showMasiveCourseBackground = state;
    });
  }
}
