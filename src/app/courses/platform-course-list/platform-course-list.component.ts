import { Component, inject } from '@angular/core';
import { CourseItemComponent } from '../course-item/course-item.component';
import { GiftIconComponent } from '../../shared/icons/gift-icon/gift-icon.component';
import { ZoomInDirective } from '../../shared/directives/animations/zoom-in.directive';
import { Observable } from 'rxjs';
import { ICourse } from '../interface/Course';
import { CourseService } from '../services/course.service';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

@Component({
  selector: 'app-platform-course-list',
  standalone: true,
  imports: [
    CourseItemComponent,
    GiftIconComponent,
    ZoomInDirective,
    AsyncPipe,
    LoaderComponent,
  ],
  templateUrl: './platform-course-list.component.html',
  styleUrl: './platform-course-list.component.css',
})
export class PlatformCourseListComponent {
  showFreeContentForm: boolean = false;

  courseService: CourseService = inject(CourseService);

  masiveCourseList$: Observable<ICourse[]> = this.courseService.getCourses();
}
