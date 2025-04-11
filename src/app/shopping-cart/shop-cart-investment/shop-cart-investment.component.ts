import {
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { BrowserService } from '../../core/services/browser.service';
import { ThemeService } from '../../core/services/theme.service';
import { ShoppingCartIconComponent } from '../../courses/icons/shopping-cart-icon/shopping-cart-icon.component';
import { AsyncPipe } from '@angular/common';
import { PaymentService } from '../services/payment.service';
import { AuthService } from '../../core/services/auth.service';
import { MessageBoxService } from '../../core/services/message-box.service';

@Component({
  selector: 'app-shop-cart-investment',
  standalone: true,
  imports: [ShoppingCartIconComponent, AsyncPipe],
  templateUrl: './shop-cart-investment.component.html',
  styleUrl: './shop-cart-investment.component.scss',
})
export class ShopCartInvestmentComponent {
  @Output() changeStep = new EventEmitter<string>();
  @Input() isStep2: boolean = false;

  browserService: BrowserService = inject(BrowserService);
  themeService: ThemeService = inject(ThemeService);
  cardService: PaymentService = inject(PaymentService);
  authService: AuthService = inject(AuthService);
  messageBoxService: MessageBoxService = inject(MessageBoxService);

  shopCartList = this.cardService.shopCartListSelected;

  wsspMessage = '';

  totalCartRegularPrice = computed(() => {
    const shopCartListValue = this.shopCartList();
    return shopCartListValue.reduce((acc, item) => acc + item.priceRegular, 0);
  });

  totalCartDiscount = computed(() => {
    const shopCartListValue = this.shopCartList();
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

    if (this.totalCartRegularPrice() > 0)
      return ((this.totalWithoutTax() + tax) * 100) / (100 - taxPercentage);
    else return 0;
  });

  taxValue = computed(() => {
    if (this.totalCartRegularPrice() > 0)
      return (this.totalAmountWithTax() - this.totalWithoutTax()).toFixed(2);
    else return 0;
  });

  createMessageForAdvisor() {
    const courseNames = this.shopCartList()
      .map((course) => course.title)
      .join(' - ');
    this.wsspMessage = `Quiero contactar con un asesor para más información sobre los siguientes módulos:
    ${courseNames}`;
  }

  ngOnInit(): void {
    this.createMessageForAdvisor();
  }

  goToPay() {
    if (this.authService.hasToken()) this.changeStep.emit('2');
    else {
      this.messageBoxService.title.set('Iniciar sesión para continuar');
      this.messageBoxService.message.set(
        'Este paso es indispensable para completar tu compra.'
      );
      this.messageBoxService.showMessageModal.set(true);
      this.messageBoxService.redirectTo.set('login');
    }
  }
}
