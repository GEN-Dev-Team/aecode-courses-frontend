import { Component, inject } from '@angular/core';
import { FreeModuleComponent } from './free-module/free-module.component';
import { CourseModuleBoxComponent } from './course-module-box/course-module-box.component';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-masive-course-detail',
  standalone: true,
  imports: [
    FreeModuleComponent,
    CourseModuleBoxComponent,
    CourseDetailComponent,
  ],
  templateUrl: './masive-course-detail.component.html',
  styleUrl: './masive-course-detail.component.css',
})
export class MasiveCourseDetailComponent {
  courseService: CourseService = inject(CourseService);

  showMasiveCourseModule: boolean = false;

  ngOnInit(): void {
    this.courseService.showMasiveCourseModule$.subscribe((state) => {
      this.showMasiveCourseModule = state;
    });
  }
}
