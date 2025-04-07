import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { PaymentSuccessedIconComponent } from '../../shared/icons/payment-successed-icon/payment-successed-icon.component';
import { Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart-step-3',
  standalone: true,
  imports: [PaymentSuccessedIconComponent, DatePipe],
  templateUrl: './shopping-cart-step-3.component.html',
  styleUrl: './shopping-cart-step-3.component.scss',
})
export class ShoppingCartStep3Component {
  @Output() changeStep = new EventEmitter<string>();
  paymentService: PaymentService = inject(PaymentService);

  paymentDetails = this.paymentService.paymentDetails();

  goToCart() {
    this.changeStep.emit('1');
  }
}
