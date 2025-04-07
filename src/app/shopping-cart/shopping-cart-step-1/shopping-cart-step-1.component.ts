import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ShopCartProductsComponent } from '../shop-cart-products/shop-cart-products.component';
import { ShopCartInvestmentComponent } from '../shop-cart-investment/shop-cart-investment.component';
import { AsyncPipe } from '@angular/common';
import { PaymentService } from '../services/payment.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-shopping-cart-step-1',
  standalone: true,
  imports: [ShopCartProductsComponent, ShopCartInvestmentComponent, AsyncPipe],
  templateUrl: './shopping-cart-step-1.component.html',
  styleUrl: './shopping-cart-step-1.component.scss',
})
export class ShoppingCartStep1Component {
  @Output() changeStep = new EventEmitter<string>();

  paymentService: PaymentService = inject(PaymentService);
  themeService: ThemeService = inject(ThemeService);

  emitStep(step: string) {
    this.changeStep.emit(step);
  }
}
