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

    return ((this.totalWithoutTax() + tax) * 100) / (100 - taxPercentage);
  });

  taxValue = computed(() => {
    return (this.totalAmountWithTax() - this.totalWithoutTax()).toFixed(2);
  });

  createMessageForAdvisor() {
    const courseNames = this.shopCartList()
      .map((course) => course.title)
      .join(' - ');
    this.wsspMessage = `Quiero contactar con un asesor para más información sobre los siguientes módulos:
    ${courseNames}`;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.createMessageForAdvisor();
  }

  goToPay() {
    if (this.authService.hasToken()) this.changeStep.emit('2');
    else {
      this.cardService.showPaymentModal.set(true);
    }
  }
}
