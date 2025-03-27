import {
  Component,
  computed,
  inject,
  Input,
  signal,
  Signal,
} from '@angular/core';
import { BrowserService } from '../../core/services/browser.service';
import { ThemeService } from '../../core/services/theme.service';
import { ISecondaryCourseSummary } from '../../courses/interface/secondary-course/Secondary-Course';
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
  browserService: BrowserService = inject(BrowserService);
  themeService: ThemeService = inject(ThemeService);
  cardService: PaymentService = inject(PaymentService);

  shopCartList = this.cardService.shopCartListSelected;

  totalCartReducePrice = computed(() => {
    const shopCartListValue = this.shopCartList();
    return shopCartListValue.reduce(
      (acc, item) => acc + item.promptPaymentPrice,
      0
    );
  });

  totalCartRegularPrice = computed(() => {
    const shopCartListValue = this.shopCartList();
    return shopCartListValue.reduce((acc, item) => acc + item.priceRegular, 0);
  });

  goToPay() {
    const message = `Me gustaría adquirir el programa de "- $ a un costo de USD. ¿Podrías indicarme como proceder?`;

    const deafulMessage = `Me gustaría adquirir el programa de " - " a un costo de  USD. ¿Podrías indicarme como proceder?`;

    let wsspMessageComprar = '';

    if (this.browserService.isBrowser()) {
      window.open(wsspMessageComprar, '_blank');
    }
  }
}
