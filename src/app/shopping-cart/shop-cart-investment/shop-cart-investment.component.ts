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

  @Input() shopCartList: ISecondaryCourseSummary[] = [];

  get totalCartReducePrice(): number {
    return this.shopCartList.reduce(
      (acc, item) => acc + item.promptPaymentPrice,
      0
    );
  }

  get totalCartRegularPrice(): number {
    return this.shopCartList.reduce((acc, item) => acc + item.priceRegular, 0);
  }

  goToPay() {
    const message = `Me gustaría adquirir el programa de "- $ a un costo de USD. ¿Podrías indicarme como proceder?`;

    const deafulMessage = `Me gustaría adquirir el programa de " - " a un costo de  USD. ¿Podrías indicarme como proceder?`;

    let wsspMessageComprar = '';

    if (this.browserService.isBrowser()) {
      window.open(wsspMessageComprar, '_blank');
    }
  }
}
