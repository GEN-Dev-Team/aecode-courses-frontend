import { Component, inject } from '@angular/core';
import { UserService } from '../../home/user.service';
import { CameraIconComponent } from '../../shared/icons/camera-icon/camera-icon.component';

@Component({
  selector: 'app-profile-main-view',
  standalone: true,
  imports: [CameraIconComponent],
  templateUrl: './profile-main-view.component.html',
  styleUrl: './profile-main-view.component.css',
})
export class ProfileMainViewComponent {
  userData = JSON.parse(localStorage.getItem('user') || '{}');
}
