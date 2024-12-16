import { Component, inject } from '@angular/core';
import { FreeModuleComponent } from './free-module/free-module.component';
import { CourseModuleBoxComponent } from './course-module-box/course-module-box.component';
import { CourseService } from '../services/course.service';
import { CourseOverlayComponent } from '../../shared/layouts/course-overlay/course-overlay.component';
import { Observable } from 'rxjs';
import { ICourse } from '../interface/Course';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-masive-course-detail',
  standalone: true,
  imports: [
    FreeModuleComponent,
    CourseModuleBoxComponent,
    CourseOverlayComponent,
    AsyncPipe,
  ],
  templateUrl: './masive-course-detail.component.html',
  styleUrl: './masive-course-detail.component.css',
})
export class MasiveCourseDetailComponent {
  courseService: CourseService = inject(CourseService);

  course$: Observable<ICourse> = this.courseService.getCourse(1);

  ngOnInit(): void {
    this.course$.subscribe((course) => console.log(course));
  }
}
