import { Component, inject, Input } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { AuthService } from '../../../core/services/auth.service';
import { UserService } from '../../../user-profile/services/user.service';
import { environment } from '../../../../environments/environment';
import { ManageUserDataService } from '../../../user-profile/services/manage-user-data.service';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [MarkdownModule],
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
