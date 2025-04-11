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
import { HeaderService } from '../../../core/services/header.service';
import { PaymentService } from '../../../shopping-cart/services/payment.service';

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
  headerService: HeaderService = inject(HeaderService);

  isOpen = this.messageBoxService.showMessageModal;
  title = this.messageBoxService.title;
  message = this.messageBoxService.message;
  isMessageTypeSuccess = this.messageBoxService.isMessageTypeSuccess;
  redirectTo = this.messageBoxService.redirectTo;

  themeService: ThemeService = inject(ThemeService);
  location: Location = inject(Location);

  closeModal(event: boolean) {
    this.isOpen.set(false);

    if (this.redirectTo() === 'login') {
      this.headerService.showLogInAccess.set(true);
    }
  }

  ngOnDestroy(): void {
    this.redirectTo.set('');
  }
}
