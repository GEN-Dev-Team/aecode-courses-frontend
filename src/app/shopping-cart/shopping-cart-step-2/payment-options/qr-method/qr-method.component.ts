import { Component, inject } from '@angular/core';
import { WhatsappIconComponent } from '../../../../shared/icons/whatsapp-icon/whatsapp-icon.component';
import { WarningPaymentIconComponent } from '../../../icons/warning-payment-icon/warning-payment-icon.component';
import { ThemeService } from '../../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-qr-method',
  standalone: true,
  imports: [WhatsappIconComponent, WarningPaymentIconComponent, AsyncPipe],
  templateUrl: './qr-method.component.html',
  styleUrl: './qr-method.component.scss',
})
export class QrMethodComponent {
  themeService = inject(ThemeService);
}
