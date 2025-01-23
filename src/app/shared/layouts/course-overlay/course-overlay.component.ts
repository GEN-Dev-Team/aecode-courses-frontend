import { Component, inject } from '@angular/core';
import { CourseService } from '../../../courses/services/course.service';
import { AddBaseUrlPipe } from '../../../core/pipes/add-base-url.pipe';
import { SunIconComponent } from '../../icons/sun-icon/sun-icon.component';
import { MoonIconComponent } from '../../icons/moon-icon/moon-icon.component';

@Component({
  selector: 'app-course-overlay',
  standalone: true,
  imports: [AddBaseUrlPipe, SunIconComponent, MoonIconComponent],
  templateUrl: './course-overlay.component.html',
  styleUrl: './course-overlay.component.css',
})
export class CourseOverlayComponent {
  courseService: CourseService = inject(CourseService);

  showMasiveCourseBackground: boolean = false;
  masiveCourseBackgroundGift: string = '';
  isDarkTheme: boolean = false;

  ngOnInit(): void {
    this.courseService.showMasiveCourseBackground$.subscribe((state) => {
      this.showMasiveCourseBackground = state;
    });

    this.courseService.masiveCourseBackgroundGift$.subscribe((gift) => {
      this.masiveCourseBackgroundGift = gift;
    });
  }
}
