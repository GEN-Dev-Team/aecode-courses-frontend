import { Component } from '@angular/core';
import { CourseAsideComponent } from '../../../courses/course-aside/course-aside.component';

@Component({
  selector: 'app-course-overlay',
  standalone: true,
  imports: [CourseAsideComponent],
  templateUrl: './course-overlay.component.html',
  styleUrl: './course-overlay.component.css',
})
export class CourseOverlayComponent {}
