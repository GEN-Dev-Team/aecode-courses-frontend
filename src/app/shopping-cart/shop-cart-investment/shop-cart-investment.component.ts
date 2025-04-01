import {
  Component,
  computed,
  EventEmitter,
  inject,
  Output,
} from '@angular/core';
import { BrowserService } from '../../core/services/browser.service';
import { ThemeService } from '../../core/services/theme.service';
import { ShoppingCartIconComponent } from '../../courses/icons/shopping-cart-icon/shopping-cart-icon.component';
import { AsyncPipe } from '@angular/common';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-shop-cart-investment',
  standalone: true,
  imports: [ShoppingCartIconComponent, AsyncPipe],
  templateUrl: './shop-cart-investment.component.html',
  styleUrl: './shop-cart-investment.component.scss',
})
export class ShopCartInvestmentComponent {
  @Output() changeStep = new EventEmitter<string>();

  browserService: BrowserService = inject(BrowserService);
  themeService: ThemeService = inject(ThemeService);
  cardService: PaymentService = inject(PaymentService);

  shopCartList = this.cardService.shopCartListSelected;

  totalCartReducePrice = computed(() => {
    const shopCartListValue = this.shopCartList();
    return shopCartListValue.reduce(
      (acc, item) =>
        acc + (item.isOnSale ? item.priceRegular - item.promptPaymentPrice : 0),
      0
    );
  });

  totalCartRegularPrice = computed(() => {
    const shopCartListValue = this.shopCartList();
    return shopCartListValue.reduce((acc, item) => acc + item.priceRegular, 0);
  });

  goToPay() {
    this.changeStep.emit('2');
  }
}
