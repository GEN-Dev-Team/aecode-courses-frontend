import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfileIconComponent } from '../../../../icons/profile-icon/profile-icon.component';
import { CourseSessionIconComponent } from '../../../../icons/course-session-icon/course-session-icon.component';
import { LogoutProfileIconComponent } from '../../../../icons/logout-profile-icon/logout-profile-icon.component';
import { StarIconComponent } from '../../../../icons/star-icon/star-icon.component';
import { SettingsIconComponent } from '../../../../icons/settings-icon/settings-icon.component';
import { EditInfIconComponent } from '../../../../icons/edit-inf-icon/edit-inf-icon.component';

@Component({
  selector: 'app-profile-sidebar-item',
  standalone: true,
  imports: [
    ProfileIconComponent,
    CourseSessionIconComponent,
    LogoutProfileIconComponent,
    StarIconComponent,
    SettingsIconComponent,
    EditInfIconComponent,
  ],
  templateUrl: './profile-sidebar-item.component.html',
  styleUrl: './profile-sidebar-item.component.scss',
})
export class ProfileSidebarItemComponent {
  @Input() item: any;
  @Input() index!: number;
  @Input() itemSelected: number = -1;
}
