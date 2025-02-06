import { Component, inject } from '@angular/core';
import { CourseItemComponent } from '../course-item/course-item.component';
import { Observable } from 'rxjs';
import { ICourse } from '../interface/Course';
import { CourseService } from '../services/course.service';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

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

  masiveCourseList$: Observable<ICourse[]> = this.courseService.getCourses();
}
