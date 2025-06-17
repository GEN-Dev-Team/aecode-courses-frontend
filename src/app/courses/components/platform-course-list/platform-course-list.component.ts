import { Component, inject, signal } from '@angular/core';
import { CourseItemComponent } from '../course-item/course-item.component';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { SecondaryCourseService } from '../../services/secondary-course.service';
import { ThemeService } from '../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-platform-course-list',
  standalone: true,
  imports: [CourseItemComponent, LoaderComponent, AsyncPipe],
  templateUrl: './platform-course-list.component.html',
  styleUrl: './platform-course-list.component.css',
})
export class PlatformCourseListComponent {
  secondaryCourses: SecondaryCourseService = inject(SecondaryCourseService);
  themeService: ThemeService = inject(ThemeService);

  courseList = signal<any>([]);

  ngOnInit(): void {
    this.secondaryCourses.getMainSecondaryCourses().subscribe((data) => {
      this.courseList.set(data);
    });
  }
}
