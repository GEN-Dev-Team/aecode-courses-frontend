import { Component, inject, signal } from '@angular/core';
import { CourseItemComponent } from '../course-item/course-item.component';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { SecondaryCourseService } from '../../services/secondary-course.service';

@Component({
  selector: 'app-platform-course-list',
  standalone: true,
  imports: [CourseItemComponent, LoaderComponent],
  templateUrl: './platform-course-list.component.html',
  styleUrl: './platform-course-list.component.css',
})
export class PlatformCourseListComponent {
  secondaryCourses: SecondaryCourseService = inject(SecondaryCourseService);

  courseList = signal<any>([]);

  ngOnInit(): void {
    this.secondaryCourses.getMainSecondaryCourses().subscribe((data) => {
      this.courseList.set(data);
    });
  }
}
