import { Component } from '@angular/core';
import { CaretUpIconLightComponent } from '../../shared/icons/caret-up-icon-light/caret-up-icon-light.component';
import { CaretDownIconLightComponent } from '../../shared/icons/caret-down-icon-light/caret-down-icon-light.component';
import { ShopCartItemComponent } from './shop-cart-item/shop-cart-item.component';

@Component({
  selector: 'app-shop-cart-products',
  standalone: true,
  imports: [
    CaretUpIconLightComponent,
    CaretDownIconLightComponent,
    ShopCartItemComponent,
  ],
  templateUrl: './shop-cart-products.component.html',
  styleUrl: './shop-cart-products.component.scss',
})
export class ShopCartProductsComponent {
  dropdown: boolean = false;
}
