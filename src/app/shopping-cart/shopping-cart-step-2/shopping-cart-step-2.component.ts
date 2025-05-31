import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { BrowserService } from '../../core/services/browser.service';
import { PaymentService } from '../services/payment.service';
import { CreditCardIconComponent } from '../../shared/icons/credit-card-icon/credit-card-icon.component';
import { PaypallIconComponent } from '../../shared/icons/paypal-icon/paypal-icon.component';
import { OtherMethodsIconComponent } from '../../shared/icons/other-methods-icon/other-methods-icon.component';
import { Router } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { MessageBoxService } from '../../core/services/message-box.service';
import { CreditCardMethodComponent } from './payment-options/credit-card-method/credit-card-method.component';
import { QrMethodComponent } from './payment-options/qr-method/qr-method.component';
import { ShopCartInvestmentComponent } from '../components/shop-cart-investment/shop-cart-investment.component';
import { AuthService } from '../../core/services/auth.service';
import { UserCourseAccessService } from '../../courses/services/user-course-access.service';

@Component({
  selector: 'app-shopping-cart-step-2',
  standalone: true,
  imports: [
    ShopCartInvestmentComponent,
    CreditCardIconComponent,
    PaypallIconComponent,
    OtherMethodsIconComponent,
    AsyncPipe,
    CreditCardMethodComponent,
    QrMethodComponent,
  ],
  templateUrl: './shopping-cart-step-2.component.html',
  styleUrl: './shopping-cart-step-2.component.scss',
})
export class ShoppingCartStep2Component {
  @Output() changeStep = new EventEmitter<string>();
  @ViewChild('paymentRef', { static: false }) paymentRef!: ElementRef;

  paymentService: PaymentService = inject(PaymentService);
  browserService: BrowserService = inject(BrowserService);
  themeService: ThemeService = inject(ThemeService);
  messageBoxService: MessageBoxService = inject(MessageBoxService);
  router: Router = inject(Router);
  authService = inject(AuthService);
  userCourseAccess = inject(UserCourseAccessService);

  paymentMethodList = [
    { id: 1, name: 'PayPal / Tarjeta de crédito' },
    { id: 2, name: 'Yape / Plin' },
    { id: 3, name: 'Otras formas de pago' },
  ];

  paymentMethodSelected = this.paymentMethodList[0];
  paypalInitialized = false;

  ngAfterViewChecked(): void {
    this.initializePaypalButtons();
  }

  initializePaypalButtons(): void {
    if (
      this.paymentMethodSelected.id === 1 &&
      this.browserService.isBrowser() &&
      !this.paypalInitialized
    ) {
      this.paypalInitialized = true;
      window.paypal
        .Buttons({
          style: {
            layout: 'vertical',
            shape: 'rect',
            label: 'pay',
          },

          createOrder: (data: any, actions: any) => {
            const items = this.paymentService
              .shopCartListSelected()
              .map((course) => ({
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
                    value: this.paymentService.totalAmountWithTax().toFixed(2),
                    breakdown: {
                      item_total: {
                        currency_code: 'USD',
                        value: this.paymentService.totalWithoutTax().toFixed(2),
                      },
                      tax_total: {
                        currency_code: 'USD',
                        value: this.paymentService.taxValue(),
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
                this.createAccessToCourses();
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
    this.paypalInitialized = false;
    if (item.id === 1) {
      this.paymentService.isPaypalMethod.set(true);
    } else {
      this.paymentService.isPaypalMethod.set(false);
    }
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

  createAccessToCourses() {
    const cartList = this.paymentService.shopCartListSelected();
    const userId = this.authService.getUserDetails()?.userId;
    const seccourseIds = cartList.map((course) => course.seccourseId);

    if (cartList.length > 0 && userId) {
      this.userCourseAccess
        .createUserCourseAccess(userId, seccourseIds)
        .subscribe(
          () => {
            console.log('Acceso creado');
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
