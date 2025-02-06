import { Component, inject } from '@angular/core';
import { FreeModuleComponent } from './free-module/free-module.component';
import { CourseModuleBoxComponent } from './course-module-box/course-module-box.component';
import { CourseService } from '../services/course.service';
import { CourseOverlayComponent } from '../../shared/layouts/course-overlay/course-overlay.component';
import { Observable } from 'rxjs';
import { ICourse } from '../interface/Course';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

@Component({
  selector: 'app-masive-course-detail',
  standalone: true,
  imports: [
    FreeModuleComponent,
    CourseModuleBoxComponent,
    CourseOverlayComponent,
    AsyncPipe,
    LoaderComponent,
  ],
  templateUrl: './masive-course-detail.component.html',
  styleUrl: './masive-course-detail.component.css',
})
export class MasiveCourseDetailComponent {
  courseService: CourseService = inject(CourseService);
  route: ActivatedRoute = inject(ActivatedRoute);

  urlCourseId: number = Number(this.route.snapshot.params['courseId']);

  course$: Observable<ICourse> = this.courseService.getCourse(this.urlCourseId);
}
