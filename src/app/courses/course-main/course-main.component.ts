import { Component } from '@angular/core';
import { SearchToolIconComponent } from '../../shared/icons/search-tool-icon/search-tool-icon.component';
import { CourseSearchIconComponent } from '../../shared/icons/course-search-icon/course-search-icon.component';
import { PlatformCourseListComponent } from '../platform-course-list/platform-course-list.component';
import { CourseListComponent } from '../course-list/course-list.component';

@Component({
  selector: 'app-course-main',
  standalone: true,
  imports: [
    SearchToolIconComponent,
    CourseSearchIconComponent,
    PlatformCourseListComponent,
    CourseListComponent,
  ],
  templateUrl: './course-main.component.html',
  styleUrl: './course-main.component.css',
})
export class CourseMainComponent {}
