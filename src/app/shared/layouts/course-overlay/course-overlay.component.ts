import { Component, inject } from '@angular/core';
import { CourseAsideComponent } from '../../../courses/course-aside/course-aside.component';
import { CourseService } from '../../../courses/services/course.service';
import { AddBaseUrlPipe } from '../../../core/pipes/add-base-url.pipe';

@Component({
  selector: 'app-course-overlay',
  standalone: true,
  imports: [CourseAsideComponent, AddBaseUrlPipe],
  templateUrl: './course-overlay.component.html',
  styleUrl: './course-overlay.component.css',
})
export class CourseOverlayComponent {
  courseService: CourseService = inject(CourseService);

  showMasiveCourseBackground: boolean = false;
  masiveCourseBackgroundGift: string = '';

  ngOnInit(): void {
    this.courseService.showMasiveCourseBackground$.subscribe((state) => {
      this.showMasiveCourseBackground = state;
    });

    this.courseService.masiveCourseBackgroundGift$.subscribe((gift) => {
      this.masiveCourseBackgroundGift = gift;
    });
  }
}
