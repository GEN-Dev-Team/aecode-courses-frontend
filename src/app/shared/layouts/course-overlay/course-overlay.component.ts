import { Component, inject } from '@angular/core';
import { CourseAsideComponent } from '../../../courses/course-aside/course-aside.component';
import { CourseService } from '../../../courses/services/course.service';

@Component({
  selector: 'app-course-overlay',
  standalone: true,
  imports: [CourseAsideComponent],
  templateUrl: './course-overlay.component.html',
  styleUrl: './course-overlay.component.css',
})
export class CourseOverlayComponent {
  courseService: CourseService = inject(CourseService);

  showMasiveCourseBackground: boolean = false;

  ngOnInit(): void {
    this.courseService.showMasiveCourseBackground$.subscribe((state) => {
      this.showMasiveCourseBackground = state;
    });
  }
}
