import { Component } from '@angular/core';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { UserProgressComponent } from './components/user-progress/user-progress.component';
import { UserSkillsComponent } from './components/user-skills/user-skills.component';
import { UserCertificatesComponent } from './components/user-certificates/user-certificates.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    UserInformationComponent,
    UserProgressComponent,
    UserSkillsComponent,
    UserCertificatesComponent,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {}
