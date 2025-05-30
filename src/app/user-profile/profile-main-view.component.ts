import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { MessageComponent } from '../shared/components/message/message.component';
import { UserProfileLayoutComponent } from '../shared/layouts/user-profile-layout/user-profile-layout.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { UserCoursesComponent } from './pages/user-courses/user-courses.component';

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
  ],
  templateUrl: './profile-main-view.component.html',
  styleUrl: './profile-main-view.component.css',
})
export class ProfileMainViewComponent {
  showChangePasswordError: boolean = false;
  showMessageModal: boolean = false;
  dataUpdated: boolean = false;
  currentView: number = 0;
}
