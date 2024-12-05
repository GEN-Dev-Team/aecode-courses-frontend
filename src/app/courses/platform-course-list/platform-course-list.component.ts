import { Component } from '@angular/core';
import { CourseItemComponent } from '../course-item/course-item.component';

@Component({
  selector: 'app-platform-course-list',
  standalone: true,
  imports: [CourseItemComponent],
  templateUrl: './platform-course-list.component.html',
  styleUrl: './platform-course-list.component.css',
})
export class PlatformCourseListComponent {}
