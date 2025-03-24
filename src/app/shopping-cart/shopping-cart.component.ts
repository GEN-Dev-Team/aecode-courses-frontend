import { Component } from '@angular/core';
import { CourseOverlayComponent } from '../shared/layouts/course-overlay/course-overlay.component';
import { ShopCartNavigatorComponent } from './shop-cart-navigator/shop-cart-navigator.component';
import { CourseModuleBoxComponent } from '../courses/masive-course-detail/course-module-box/course-module-box.component';
import { ShopCartProductsComponent } from './shop-cart-products/shop-cart-products.component';
import { ShopCartInvestmentComponent } from './shop-cart-investment/shop-cart-investment.component';
import { ISecondaryCourseSummary } from '../courses/interface/secondary-course/Secondary-Course';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CourseOverlayComponent,
    ShopCartNavigatorComponent,
    CourseModuleBoxComponent,
    ShopCartProductsComponent,
    ShopCartInvestmentComponent,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  shopCartList: ISecondaryCourseSummary[] = [];

  handleShopCartList(event: ISecondaryCourseSummary) {
    if (!this.shopCartList.includes(event)) {
      this.shopCartList.push(event);
    } else {
      this.shopCartList.splice(this.shopCartList.indexOf(event), 1);
    }
  }
}
