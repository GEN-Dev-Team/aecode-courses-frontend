import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProfileMainViewComponent } from './user-profile/profile-main-view/profile-main-view.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseLandingDetailComponent } from './courses/course-landing-detail/course-landing-detail.component';
import { MasiveCourseDetailComponent } from './courses/masive-course-detail/masive-course-detail.component';
import { adminAuthGuard } from './core/guards/admin-auth.guard';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
  {
    path: '',
    title: 'AECODE COURSES',
    component: HomeComponent,
  },
  {
    path: 'courses',
    title: 'AECODE COURSES',
    component: CoursesComponent,
  },
  {
    path: 'courses/secondary-course-detail/:secCourseId',
    title: 'AECODE COURSES',
    component: CourseLandingDetailComponent,
  },
  {
    path: 'courses/masive-course-detail/:courseId',
    title: 'AECODE COURSES',
    component: MasiveCourseDetailComponent,
  },
  {
    path: 'courses/masive-course-detail/:courseId/module/:moduleId',
    title: 'AECODE COURSES',
    component: CourseDetailComponent,
  },
  {
    path: 'profile/:id',
    title: 'PROFILE',
    component: ProfileMainViewComponent,
  },

  {
    path: 'admin-panel',
    title: 'ADMIN PANEL',
    component: AdminPanelComponent,
    canActivate: [adminAuthGuard],
  },
  {
    path: 'payment',
    title: 'PAYMENT',
    component: PaymentComponent,
    // canActivate: [adminAuthGuard],
  },
  {
    path: '**',
    title: 'AECODE COURSES',
    component: CoursesComponent,
  },
];
