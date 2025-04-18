import { Component, inject } from '@angular/core';
import { CourseOverlayComponent } from '../shared/layouts/course-overlay/course-overlay.component';
import { ShopCartNavigatorComponent } from './shop-cart-navigator/shop-cart-navigator.component';
import { ThemeService } from '../core/services/theme.service';
import { ShoppingCartStep1Component } from './shopping-cart-step-1/shopping-cart-step-1.component';
import { ShoppingCartStep2Component } from './shopping-cart-step-2/shopping-cart-step-2.component';
import { ShoppingCartStep3Component } from './shopping-cart-step-3/shopping-cart-step-3.component';
import { HeaderService } from '../core/services/header.service';
import { PaymentService } from './services/payment.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CourseOverlayComponent,
    ShopCartNavigatorComponent,
    ShoppingCartStep1Component,
    ShoppingCartStep2Component,
    ShoppingCartStep3Component,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  themeService: ThemeService = inject(ThemeService);
  paymentService: PaymentService = inject(PaymentService);

  stepSelected: string = '1';
  paymentDetails: any;

  showModal = this.paymentService.showPaymentModal;

  changeStep(step: string) {
    this.stepSelected = step;
  }
}
