import { Component, inject } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { UserDataPoliciesComponent } from './user-data-policies/user-data-policies.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';
import { PaymentPoliciesComponent } from './payment-policies/payment-policies.component';
import { MessageBoxService } from '../../../core/services/message-box.service';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [
    ModalComponent,
    UserDataPoliciesComponent,
    PrivacyPoliciesComponent,
    PaymentPoliciesComponent,
  ],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.scss',
})
export class TermsAndConditionsComponent {
  messageBoxService: MessageBoxService = inject(MessageBoxService);

  showTermsModal = this.messageBoxService.showTermsModal;
  termsMessage = this.messageBoxService.termsMessage;

  closeModal() {
    this.showTermsModal.set(false);
  }
}
