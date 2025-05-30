import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { ShopCartWhatsappButtonComponent } from '../../../components/shop-cart-whatsapp-button/shop-cart-whatsapp-button.component';
import { PaymentService } from '../../../services/payment.service';

@Component({
  selector: 'app-qr-method',
  standalone: true,
  imports: [AsyncPipe, ShopCartWhatsappButtonComponent],
  templateUrl: './qr-method.component.html',
  styleUrl: './qr-method.component.scss',
})
export class QrMethodComponent {
  themeService = inject(ThemeService);
  paymentService: PaymentService = inject(PaymentService);
}
