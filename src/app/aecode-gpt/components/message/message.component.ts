import { Component, inject, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { ManageUserDataService } from '../../../user-profile/services/manage-user-data.service';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class chatMessageComponent {
  @Input() message: string = '';
  @Input() isUserMessage: boolean = false;

  authService = inject(AuthService);
  manageUserDataService = inject(ManageUserDataService);

  userData = this.manageUserDataService.userDataInfo;
}
