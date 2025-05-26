import { Component, inject } from '@angular/core';
import { WarningPaymentIconComponent } from '../../icons/warning-payment-icon/warning-payment-icon.component';
import { WhatsappIconComponent } from '../../../shared/icons/whatsapp-icon/whatsapp-icon.component';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-shop-cart-whatsapp-button',
  standalone: true,
  imports: [WarningPaymentIconComponent, WhatsappIconComponent],
  templateUrl: './shop-cart-whatsapp-button.component.html',
  styleUrl: './shop-cart-whatsapp-button.component.scss',
})
export class ShopCartWhatsappButtonComponent {
  paymentService = inject(PaymentService);

  courseListSelected = '';

  ngOnInit(): void {
    const selectedCourses = this.paymentService.shopCartListSelected();
    this.courseListSelected = selectedCourses
      .map((item) => item.title)
      .join(' - ');
  }

  sendWhatsapp(): void {
    const message = `Hola AECODE, quiero validar mi compra de: ${this.courseListSelected}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=+51900121245&text=${encodedMessage}`;
    window.open(url, '_blank');
  }
}
