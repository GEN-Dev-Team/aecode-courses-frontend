import { Component, EventEmitter, inject, Output } from '@angular/core';
import { PaymentSuccessedIconComponent } from '../../shared/icons/payment-successed-icon/payment-successed-icon.component';
import { PaymentService } from '../services/payment.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-shopping-cart-step-3',
  standalone: true,
  imports: [PaymentSuccessedIconComponent, DatePipe, AsyncPipe],
  templateUrl: './shopping-cart-step-3.component.html',
  styleUrl: './shopping-cart-step-3.component.scss',
})
export class ShoppingCartStep3Component {
  @Output() changeStep = new EventEmitter<string>();
  paymentService: PaymentService = inject(PaymentService);
  themeService: ThemeService = inject(ThemeService);

  paymentDetails = this.paymentService.paymentDetails();

  goToCart() {
    this.changeStep.emit('1');
  }
}
