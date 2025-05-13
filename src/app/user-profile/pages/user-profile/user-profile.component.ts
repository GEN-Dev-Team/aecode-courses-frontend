import { Component } from '@angular/core';
import { UserInformationComponent } from './components/user-information/user-information.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserInformationComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {}
