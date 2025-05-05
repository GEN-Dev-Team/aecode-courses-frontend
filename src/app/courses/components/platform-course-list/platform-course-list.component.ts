import { Component, inject, signal } from '@angular/core';
import { CourseItemComponent } from '../course-item/course-item.component';
import { AsyncPipe } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { SecondaryCourseService } from '../../services/secondary-course.service';

@Component({
  selector: 'app-platform-course-list',
  standalone: true,
  imports: [CourseItemComponent, AsyncPipe, LoaderComponent],
  templateUrl: './platform-course-list.component.html',
  styleUrl: './platform-course-list.component.css',
})
export class PlatformCourseListComponent {
  showFreeContentForm: boolean = false;

  courseService: CourseService = inject(CourseService);
  secondaryCourses: SecondaryCourseService = inject(SecondaryCourseService);

  // masiveCourseList$: Observable<ICourse[]> = this.courseService.getCourses();

  courseList = signal<any>([]);

  ngOnInit(): void {
    this.secondaryCourses.getSecondaryCourseById(100).subscribe((data) => {
      this.courseList().push(data);
      this.secondaryCourses.getSecondaryCourseById(101).subscribe((data) => {
        this.courseList().push(data);
      });
    });
  }
}
