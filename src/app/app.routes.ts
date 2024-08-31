import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';

export const routes: Routes = [
  {
    path: '',
    title: 'AECODE COURSES',
    component: LogInComponent,
  },
  {
    path: 'course-detail',
    title: 'AECODE COURSES',
    component: CourseDetailComponent,
  },
];
