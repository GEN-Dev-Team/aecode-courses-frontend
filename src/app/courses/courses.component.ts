import { Component } from '@angular/core';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseAsideComponent } from './course-aside/course-aside.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseListComponent, CourseAsideComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {}
