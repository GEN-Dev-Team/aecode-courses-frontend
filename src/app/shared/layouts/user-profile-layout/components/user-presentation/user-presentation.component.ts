import { Component } from '@angular/core';
import { CameraIconComponent } from '../../../../icons/camera-icon/camera-icon.component';
import { CameraProfileIconComponent } from '../../../../icons/camera-profile-icon/camera-profile-icon.component';

@Component({
  selector: 'app-user-presentation',
  standalone: true,
  imports: [CameraIconComponent, CameraProfileIconComponent],
  templateUrl: './user-presentation.component.html',
  styleUrl: './user-presentation.component.scss',
})
export class UserPresentationComponent {}
