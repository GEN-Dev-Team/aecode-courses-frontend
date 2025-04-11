import {
  Component,
  computed,
  ElementRef,
  EventEmitter,
  inject,
  Output,
  ViewChild,
} from '@angular/core';
import { BrowserService } from '../../core/services/browser.service';
import { PaymentService } from '../services/payment.service';
import { ShopCartInvestmentComponent } from '../shop-cart-investment/shop-cart-investment.component';
import { CreditCardIconComponent } from '../../shared/icons/credit-card-icon/credit-card-icon.component';
import { PaypallIconComponent } from '../../shared/icons/paypal-icon/paypal-icon.component';
import { OtherMethodsIconComponent } from '../../shared/icons/other-methods-icon/other-methods-icon.component';
import { Router } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { MessageBoxService } from '../../core/services/message-box.service';

@Component({
  selector: 'app-shopping-cart-step-2',
  standalone: true,
  imports: [
    ShopCartInvestmentComponent,
    CreditCardIconComponent,
    PaypallIconComponent,
    OtherMethodsIconComponent,
    AsyncPipe,
  ],
  templateUrl: './shopping-cart-step-2.component.html',
  styleUrl: './shopping-cart-step-2.component.scss',
})
export class ShoppingCartStep2Component {
  @Output() changeStep = new EventEmitter<string>();

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  paymentService: PaymentService = inject(PaymentService);
  browserService: BrowserService = inject(BrowserService);
  themeService: ThemeService = inject(ThemeService);
  messageBoxService: MessageBoxService = inject(MessageBoxService);
  router: Router = inject(Router);
  isPaypalMethod = true;

  paymentMethodList = [
    { id: 1, name: 'PayPal' },
    { id: 2, name: 'Tarjeta de crédito / Débito' },
    { id: 3, name: 'Otras formas de pago' },
  ];

  paymentMethodSelected = this.paymentMethodList[0];

  courseList = this.paymentService.shopCartListSelected();

  totalCartRegularPrice = computed(() => {
    const shopCartListValue = this.courseList;
    return shopCartListValue.reduce((acc, item) => acc + item.priceRegular, 0);
  });

  totalCartDiscount = computed(() => {
    const shopCartListValue = this.courseList;
    return shopCartListValue.reduce(
      (acc, item) =>
        acc + (item.isOnSale ? item.priceRegular - item.promptPaymentPrice : 0),
      0
    );
  });

  totalWithoutTax = computed(() => {
    return this.totalCartRegularPrice() - this.totalCartDiscount();
  });

  totalAmountWithTax = computed(() => {
    const tax = 0.3;
    const taxPercentage = 5.4;

    return ((this.totalWithoutTax() + tax) * 100) / (100 - taxPercentage);
  });

  taxValue = computed(() => {
    return (this.totalAmountWithTax() - this.totalWithoutTax()).toFixed(2);
  });

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
            const items = this.courseList.map((course) => ({
              name: course.title,
              unit_amount: {
                currency_code: 'USD',
                value: (course.isOnSale
                  ? course.promptPaymentPrice
                  : course.priceRegular
                ).toFixed(2),
              },
              quantity: '1',
            }));

            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'USD',
                    value: this.totalAmountWithTax().toFixed(2),
                    breakdown: {
                      item_total: {
                        currency_code: 'USD',
                        value: this.totalWithoutTax().toFixed(2),
                      },
                      tax_total: {
                        currency_code: 'USD',
                        value: this.taxValue(),
                      },
                    },
                  },
                  items: items,
                },
              ],
            });
          },

          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              if (details.status === 'COMPLETED') {
                this.emitStep('3');
                this.paymentService.paymentDetails.set(details);
                this.paymentService.cleanShopCartList();
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

  selectPaymentMethod(item: any) {
    this.paymentMethodSelected = item;
  }

  emitStep(step: string) {
    this.changeStep.emit(step);
  }

  showPaymentPolicies() {
    this.messageBoxService.showTermsModal.set(true);
    this.messageBoxService.termsMessage.set('payment');
  }

  showPrivacyPolicies() {
    this.messageBoxService.showTermsModal.set(true);
    this.messageBoxService.termsMessage.set('privacy');
  }
}
