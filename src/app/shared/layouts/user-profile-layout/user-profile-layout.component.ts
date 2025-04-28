import { Component } from '@angular/core';
import { ProfileSidebarComponent } from './components/profile-sidebar/profile-sidebar.component';

@Component({
  selector: 'app-user-profile-layout',
  standalone: true,
  imports: [ProfileSidebarComponent],
  templateUrl: './user-profile-layout.component.html',
  styleUrl: './user-profile-layout.component.scss',
})
export class UserProfileLayoutComponent {}
