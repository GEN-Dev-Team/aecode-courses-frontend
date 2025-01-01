import { Component } from '@angular/core';
import { CourseMainComponent } from './course-main/course-main.component';
import { CourseOverlayComponent } from '../shared/layouts/course-overlay/course-overlay.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseMainComponent, CourseOverlayComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {}
