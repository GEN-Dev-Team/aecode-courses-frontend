import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { AsyncPipe, Location } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';
import { SuccessIconComponent } from './success-icon/success-icon.component';
import { BlockedIconComponent } from './blocked-icon/blocked-icon.component';
import { ModalComponent } from '../modal/modal.component';
import { MessageBoxService } from '../../../core/services/message-box.service';

@Component({
  selector: 'app-content-blocked',
  standalone: true,
  imports: [
    ButtonComponent,
    AsyncPipe,
    SuccessIconComponent,
    BlockedIconComponent,
    ModalComponent,
  ],
  templateUrl: './content-blocked.component.html',
  styleUrl: './content-blocked.component.css',
})
export class ContentBlockedComponent {
  messageBoxService: MessageBoxService = inject(MessageBoxService);

  isOpen = this.messageBoxService.showMessageModal;
  title = this.messageBoxService.title;
  message = this.messageBoxService.message;
  isMessageTypeSuccess = this.messageBoxService.isMessageTypeSuccess;

  themeService: ThemeService = inject(ThemeService);
  location: Location = inject(Location);

  closeModal(event: boolean) {
    this.isOpen.set(false);
  }
}
