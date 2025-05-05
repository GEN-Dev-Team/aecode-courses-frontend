<<<<<<< HEAD
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProfileMainViewComponent } from './user-profile/profile-main-view.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseLandingDetailComponent } from './courses/pages/course-landing-detail/course-landing-detail.component';
import { adminAuthGuard } from './core/guards/admin-auth.guard';
=======
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProfileMainViewComponent } from './user-profile/profile-main-view/profile-main-view.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseLandingDetailComponent } from './courses/course-landing-detail/course-landing-detail.component';
import { MasiveCourseDetailComponent } from './courses/masive-course-detail/masive-course-detail.component';
import { adminAuthGuard } from './core/guards/admin-auth.guard';
import { CommunityComponent } from './community/community.component';
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
import { InProgressComponent } from './in-progress/in-progress.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LiveComponent } from './live/live.component';
<<<<<<< HEAD
import { AecodeGptComponent } from './aecode-gpt/aecode-gpt.component';
import { NotAvailableMobileComponent } from './not-available-mobile/not-available-mobile.component';
import { mobileAvailabilityGuard } from './core/guards/mobile-availability.guard';
import { PurchasedProgramDetailsComponent } from './courses/pages/purchased-program-details/purchased-program-details.component';
import { CommunityInProgressComponent } from './community-in-progress/community-in-progress.component';
=======
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74

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
<<<<<<< HEAD
    path: 'aecode-chat',
    title: 'AECODE CHAT',
    component: AecodeGptComponent,
  },
  {
=======
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
    path: 'training',
    title: 'AECODE TRAINING',
    component: CoursesComponent,
  },
  {
    path: 'training/module/:secCourseId',
    title: 'AECODE COURSES',
    component: CourseLandingDetailComponent,
  },
  {
    path: 'training/e-learning/:courseId',
    title: 'AECODE COURSES',
<<<<<<< HEAD
    component: PurchasedProgramDetailsComponent,
=======
    component: MasiveCourseDetailComponent,
  },
  {
    path: 'training/e-learning/:courseId/module/:moduleId',
    title: 'AECODE COURSES',
    component: CourseDetailComponent,
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
  },
  {
    path: 'profile/:id',
    title: 'PROFILE',
    component: ProfileMainViewComponent,
<<<<<<< HEAD
    canActivate: [mobileAvailabilityGuard],
=======
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
  },
  {
    path: 'admin-panel',
    title: 'ADMIN PANEL',
    component: AdminPanelComponent,
<<<<<<< HEAD
    canActivate: [adminAuthGuard, mobileAvailabilityGuard],
=======
    canActivate: [adminAuthGuard],
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
  },
  {
    path: 'community',
    title: 'AECODE COMMUNITY',
<<<<<<< HEAD
    component: CommunityInProgressComponent,
    canActivate: [mobileAvailabilityGuard],
=======
    component: CommunityComponent,
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
  },
  {
    path: 'shopping-cart',
    title: 'AECODE CART',
    component: ShoppingCartComponent,
<<<<<<< HEAD
    canActivate: [mobileAvailabilityGuard],
=======
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
  },
  {
    path: 'live',
    title: 'IN PROGRESS',
    component: LiveComponent,
<<<<<<< HEAD
    canActivate: [mobileAvailabilityGuard],
  },
  {
    path: 'in-progress',
    title: 'IN PROGRESS',
    component: CommunityInProgressComponent,
=======
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
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
<<<<<<< HEAD
    path: 'not-available-in-mobile',
    title: 'NOT AVAILABLE ON MOBILE',
    component: NotAvailableMobileComponent,
  },
  {
=======
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
    path: '**',
    title: 'NOT FOUND',
    component: NotFoundComponent,
  },
];
