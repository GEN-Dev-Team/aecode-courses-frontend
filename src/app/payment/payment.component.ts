import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { MainLayoutComponent } from '../shared/layouts/main-layout/main-layout.component';
import { BrowserService } from '../core/services/browser.service';
import { PaypallIconComponent } from '../shared/icons/paypal-icon/paypal-icon.component';
import { CardIconComponent } from '../shared/icons/card-icon/card-icon.component';
import { PaymentService } from './services/payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [MainLayoutComponent, PaypallIconComponent, CardIconComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  browserService: BrowserService = inject(BrowserService);
  paymentService: PaymentService = inject(PaymentService);

  paymentDetails = this.paymentService.paymentDetails;

  isPaypalMethod = false;

  ngOnInit(): void {
    // this.amount = this.payment.totalAmount;

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
