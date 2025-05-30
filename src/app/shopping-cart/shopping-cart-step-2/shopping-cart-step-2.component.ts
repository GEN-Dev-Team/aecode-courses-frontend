import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Output,
  ViewChild,
  OnInit
} from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { PaymentService } from '../services/payment.service';
import { BrowserService } from '../../core/services/browser.service';
import { ShopCartInvestmentComponent } from '../shop-cart-investment/shop-cart-investment.component';
import { CreditCardIconComponent } from '../../shared/icons/credit-card-icon/credit-card-icon.component';
import { WhatsappIconComponent } from '../../shared/icons/whatsapp-icon/whatsapp-icon.component';
import { CopyIconComponent } from '../../shared/icons/copy-icon/copy-icon.component';
import { PaypallIconComponent } from '../../shared/icons/paypal-icon/paypal-icon.component';
import { OtherMethodsIconComponent } from '../../shared/icons/other-methods-icon/other-methods-icon.component';
import { Router } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MessageBoxService } from '../../core/services/message-box.service';
import { PaymentMethod } from '../../../types';
import { InfoIconComponent } from '../../shared/icons/info-icon/info-icon.component';

@Component({
  selector: 'app-shopping-cart-step-2',
  standalone: true,
  imports: [
    InfoIconComponent,
    ShopCartInvestmentComponent,
    CreditCardIconComponent,
    CopyIconComponent,
    PaypallIconComponent,
    OtherMethodsIconComponent,
    WhatsappIconComponent,
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './shopping-cart-step-2.component.html',
  styleUrl: './shopping-cart-step-2.component.scss',
})
export class ShoppingCartStep2Component implements OnInit {
  @Output() changeStep = new EventEmitter<string>();

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  browserService: BrowserService = inject(BrowserService);
  messageBoxService: MessageBoxService = inject(MessageBoxService);
  router: Router = inject(Router);
  isPaypalMethod = true;

  paymentMethodList: PaymentMethod[] = [
    { id: 1, name: 'Paypal / Tarjeta de Crédito' },
    { id: 2, name: 'Yape/ Plin' },
    { id: 3, name: 'Otras formas de pago' },
  ];

  constructor(
    public themeService: ThemeService,
    public paymentService: PaymentService
  ) { }

  paymentMethodSelected: PaymentMethod = this.paymentMethodList[0];

  banks = [
    {
      name: 'Banco Interbank',
      logo: 'assets/images/payment/interbank-logo.png',
      title: 'AECCODE INGENIERÍA Y PROGRAMACIÓN',
      accounts: [
        {
          currency: 'Cuenta soles',
          number: '2003006175056',
          cci: '0032000300617505635',
        },
        {
          currency: 'Cuenta en Dólares',
          number: '2003006175063',
          cci: '0032000300617506331',
        },
      ],
    },
    {
      name: 'Banco de Crédito del Perú / BCP',
      logo: 'assets/images/payment/bcp-logo.png',
      title: 'AECCODE INGENIERÍA Y PROGRAMACIÓN',
      accounts: [
        {
          currency: 'Cuenta soles',
          number: '19105042934072',
          cci: '002191050429407256',
        },
        {
          currency: 'Cuenta en Dólares',
          number: '19105043000139',
          cci: '002191050430001390',
        },
      ],
    },
  ];


  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log('Copied to clipboard:', text);
        // Optionally, show a success message to the user
      },
      (err) => {
        console.error('Failed to copy to clipboard:', err);
        // Optionally, show an error message to the user
      }
    );
  }

  openWhatsapp() {
    const message = encodeURIComponent("Hola, adjunto el comprobante de pago.");
    window.open(`https://wa.me/51900121245?text=${message}`, '_blank');
  }

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

  selectPaymentMethod(item: PaymentMethod): void {
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
