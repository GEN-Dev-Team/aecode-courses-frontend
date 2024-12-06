import { Component } from '@angular/core';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseAsideComponent } from './course-aside/course-aside.component';
import { SearchToolIconComponent } from '../shared/icons/search-tool-icon/search-tool-icon.component';
import { SearchIconComponent } from '../admin-panel/icons/search-icon/search-icon.component';
import { CourseSearchIconComponent } from '../shared/icons/course-search-icon/course-search-icon.component';
import { PlatformCourseListComponent } from './platform-course-list/platform-course-list.component';
import { CourseLandingDetailComponent } from './course-landing-detail/course-landing-detail.component';
import { CourseMainComponent } from './course-main/course-main.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CourseListComponent,
    CourseAsideComponent,
    SearchToolIconComponent,
    SearchIconComponent,
    CourseSearchIconComponent,
    PlatformCourseListComponent,
    CourseLandingDetailComponent,
    CourseMainComponent,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {}
