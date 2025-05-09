import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-section-box',
  standalone: true,
  imports: [],
  templateUrl: './profile-section-box.component.html',
  styleUrl: './profile-section-box.component.scss',
})
export class ProfileSectionBoxComponent {
  @Input() boxTitle: any;
}
