import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CourseOverlayComponent } from '../shared/layouts/course-overlay/course-overlay.component';
import { ShopCartNavigatorComponent } from './shop-cart-navigator/shop-cart-navigator.component';
import { ShopCartProductsComponent } from './shop-cart-products/shop-cart-products.component';
import { ShopCartInvestmentComponent } from './shop-cart-investment/shop-cart-investment.component';
import { ISecondaryCourseSummary } from '../courses/interface/secondary-course/Secondary-Course';
import { BrowserService } from '../core/services/browser.service';
import { PaymentService } from './services/payment.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CourseOverlayComponent,
    ShopCartNavigatorComponent,
    ShopCartProductsComponent,
    ShopCartInvestmentComponent,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  browserService: BrowserService = inject(BrowserService);
  paymentService: PaymentService = inject(PaymentService);

  paymentDetails = this.paymentService.paymentDetails;
  isPaypalMethod = false;

  ngOnInit(): void {
    if (this.browserService.isBrowser()) {
      window.paypal
        .Buttons({
          style: {
            layout: 'vertical',
            shape: 'rect',
            label: 'pay',
          },

          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: this.paymentDetails().amount.toString(),
                    currency_code: 'USD',
                  },
                },
              ],
            });
          },

          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              console.log(details);
              if (details.status === 'COMPLETED') {
                console.log('Pago exitoso');
              }
            });
          },

          onError: (err: any) => {
            console.log(err);
          },
        })
        .render(this.paymentRef.nativeElement);
    }
  }
}
