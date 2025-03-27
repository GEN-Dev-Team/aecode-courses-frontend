import { Component, EventEmitter, inject, Output, Signal } from '@angular/core';
import { ShopCartItemComponent } from './shop-cart-item/shop-cart-item.component';
import { CaretUpIconLightComponent } from '../../shared/icons/caret-up-icon-light/caret-up-icon-light.component';
import { CaretDownIconLightComponent } from '../../shared/icons/caret-down-icon-light/caret-down-icon-light.component';
import { ISecondaryCourseSummary } from '../../courses/interface/secondary-course/Secondary-Course';
import { BrowserService } from '../../core/services/browser.service';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-shop-cart-products',
  standalone: true,
  imports: [
    ShopCartItemComponent,
    CaretUpIconLightComponent,
    CaretDownIconLightComponent,
  ],
  templateUrl: './shop-cart-products.component.html',
  styleUrl: './shop-cart-products.component.scss',
})
export class ShopCartProductsComponent {
  @Output() itemSelected = new EventEmitter<ISecondaryCourseSummary>();

  cartService: PaymentService = inject(PaymentService);
  browserService: BrowserService = inject(BrowserService);

  dropdown: boolean = true;

  itemList = this.cartService.shopCartList;

  emitItemSelected(item: ISecondaryCourseSummary) {
    this.itemSelected.emit(item);
  }
}
