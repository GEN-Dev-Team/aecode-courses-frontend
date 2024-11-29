import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { NoMobileComponent } from './no-mobile/no-mobile.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { adminAuthGuard } from './core/guards/admin-auth.guard';
import { ProfileMainViewComponent } from './user-profile/profile-main-view/profile-main-view.component';

export const routes: Routes = [
  {
    path: '',
    title: 'AECODE COURSES',
    component: HomeComponent,
  },
  {
    path: 'course-detail/:id',
    title: 'AECODE COURSES',
    component: CourseDetailComponent,
  },
  {
    path: 'profile/:id',
    title: 'PROFILE',
    component: ProfileMainViewComponent,
  },
  {
    path: 'payment',
    title: 'AECODE PAGOS',
    component: PaymentComponent,
  },
  {
    path: 'admin-panel',
    title: 'ADMIN PANEL',
    component: AdminPanelComponent,
    canActivate: [adminAuthGuard],
  },
  {
    path: 'no-mobile',
    title: 'NO MOBILE',
    component: NoMobileComponent,
  },
];
