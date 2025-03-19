import { Component } from '@angular/core';
import { CourseOverlayComponent } from '../shared/layouts/course-overlay/course-overlay.component';
import { ShopCartNavigatorComponent } from './shop-cart-navigator/shop-cart-navigator.component';
import { CourseInvestComponent } from '../courses/course-landing-detail/course-invest/course-invest.component';
import { CourseModuleBoxComponent } from '../courses/masive-course-detail/course-module-box/course-module-box.component';
import { ShopCartProductsComponent } from './shop-cart-products/shop-cart-products.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CourseOverlayComponent,
    ShopCartNavigatorComponent,
    CourseInvestComponent,
    CourseModuleBoxComponent,
    ShopCartProductsComponent,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {}
