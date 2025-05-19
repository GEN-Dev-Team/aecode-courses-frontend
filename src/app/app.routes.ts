import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CoursesComponent } from './courses/courses.component';
import { adminAuthGuard } from './core/guards/admin-auth.guard';
import { InProgressComponent } from './in-progress/in-progress.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LiveComponent } from './live/live.component';
import { AecodeGptComponent } from './aecode-gpt/aecode-gpt.component';
import { NotAvailableMobileComponent } from './not-available-mobile/not-available-mobile.component';
import { mobileAvailabilityGuard } from './core/guards/mobile-availability.guard';
import { PurchasedProgramDetailsComponent } from './courses/pages/purchased-program-details/purchased-program-details.component';
import { CommunityInProgressComponent } from './community-in-progress/community-in-progress.component';
import { CourseLandingDetailComponent } from './courses/pages/course-landing-detail/course-landing-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'AECODE',
    component: HomeComponent,
  },
  {
    path: 'aecode-chat',
    title: 'AECODE CHAT',
    component: AecodeGptComponent,
  },
  {
    path: 'training',
    title: 'AECODE TRAINING',
    component: CoursesComponent,
  },
  {
    path: 'training/:urlname/:module',
    title: 'AECODE COURSES',
    component: CourseLandingDetailComponent,
  },
  {
    // path: 'training/e-learning/:courseId',
    path: 'training/my-courses',
    title: 'AECODE COURSES',
    component: PurchasedProgramDetailsComponent,
  },
  {
    path: 'profile/:id',
    title: 'AECODE PROFILE',
    // component: ProfileMainViewComponent,
    component: InProgressComponent,
    canActivate: [mobileAvailabilityGuard],
  },
  {
    path: 'admin-panel',
    title: 'ADMIN PANEL',
    component: AdminPanelComponent,
    canActivate: [adminAuthGuard, mobileAvailabilityGuard],
  },
  {
    path: 'community',
    title: 'AECODE COMMUNITY',
    component: CommunityInProgressComponent,
    // component: CommunityComponent,
    canActivate: [mobileAvailabilityGuard],
  },
  {
    path: 'shopping',
    title: 'AECODE SHOPPING',
    component: ShoppingCartComponent,
  },
  {
    path: 'live',
    title: 'AECODE LIVE',
    component: LiveComponent,
  },
  {
    path: 'in-progress',
    title: 'IN PROGRESS',
    component: CommunityInProgressComponent,
  },
  {
    path: 'not-found',
    title: 'NOT FOUND',
    component: NotFoundComponent,
  },
  {
    path: 'in-progress',
    title: 'IN PROGRESS',
    component: InProgressComponent,
  },
  {
    path: 'not-available-in-mobile',
    title: 'NOT AVAILABLE ON MOBILE',
    component: NotAvailableMobileComponent,
  },
  {
    path: '**',
    title: 'NOT FOUND',
    component: NotFoundComponent,
  },
];
