import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ProfileSidebarComponent } from './components/profile-sidebar/profile-sidebar.component';
import { ManageUserDataService } from '../../../user-profile/services/manage-user-data.service';

@Component({
  selector: 'app-user-profile-layout',
  standalone: true,
  imports: [ProfileSidebarComponent],
  templateUrl: './user-profile-layout.component.html',
  styleUrl: './user-profile-layout.component.scss',
})
export class UserProfileLayoutComponent {
  @Output() itemIndexSelected = new EventEmitter<number>();
}
