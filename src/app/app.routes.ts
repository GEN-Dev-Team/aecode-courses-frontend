import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { NoMobileComponent } from './no-mobile/no-mobile.component';

export const routes: Routes = [
  {
    path: '',
    title: 'AECODE COURSES',
    component: LogInComponent,
  },
  {
    path: 'course-detail/:id',
    title: 'AECODE COURSES',
    component: CourseDetailComponent,
  },
  {
    path: 'payment',
    title: 'AECODE PAGOS',
    component: PaymentComponent,
  },
  {
    path: 'no-mobile',
    title: 'NO MOBILE',
    component: NoMobileComponent,
  },
];
