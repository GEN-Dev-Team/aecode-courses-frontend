import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { MessageComponent } from '../shared/components/message/message.component';
import { UserProfileLayoutComponent } from '../shared/layouts/user-profile-layout/user-profile-layout.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { UserCoursesComponent } from './pages/user-courses/user-courses.component';
import { SectionProfileInProgressComponent } from './pages/section-profile-in-progress/section-profile-in-progress.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-main-view',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ModalComponent,
    MessageComponent,
    UserProfileLayoutComponent,
    UserProfileComponent,
    EditProfileComponent,
    UserCoursesComponent,
    SectionProfileInProgressComponent,
  ],
  templateUrl: './profile-main-view.component.html',
  styleUrl: './profile-main-view.component.css',
})
export class ProfileMainViewComponent {
  router = inject(Router);

  showChangePasswordError: boolean = false;
  showMessageModal: boolean = false;
  dataUpdated: boolean = false;
  currentView: number = 0;

  ngAfterViewChecked(): void {
    const url = this.router.url;

    if (url.includes('my-courses')) {
      this.currentView = 2;
    }
  }
}
