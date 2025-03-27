import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environment/environment';
import { ISecondaryCourseSummary } from '../../courses/interface/secondary-course/Secondary-Course';
import { BrowserService } from '../../core/services/browser.service';

interface IPayment {
  courseName: string;
  amount: number;
}

const InitIPayment: IPayment = {
  courseName: '',
  amount: 0,
};

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  browserService: BrowserService = inject(BrowserService);
  paymentDetails = signal<IPayment>(InitIPayment);

  shopCartList = signal<ISecondaryCourseSummary[]>([]);
  shopCartListSelected = signal<ISecondaryCourseSummary[]>([]);

  initializeShopCartList() {
    if (this.browserService.isBrowser()) {
      const cart = localStorage.getItem('cart') || '[]';

      if (cart === '[]') return;
      this.shopCartList.set(JSON.parse(cart));
    }
  }

  addItemToCart(item: ISecondaryCourseSummary): number {
    const alreadyInCart = this.shopCartList().some(
      (i) => i.seccourseId === item.seccourseId
    );

    if (alreadyInCart) {
      return 0;
    } else {
      this.shopCartList.update((current) => [...current, item]);
      localStorage.setItem('cart', JSON.stringify(this.shopCartList()));
      return 1;
    }
  }

  deleteItemFromCart(item: ISecondaryCourseSummary) {
    this.shopCartList.update((current) =>
      current.filter((i) => i.seccourseId !== item.seccourseId)
    );
    localStorage.setItem('cart', JSON.stringify(this.shopCartList()));
  }

  addItemToCartSelected(item: ISecondaryCourseSummary) {
    const alreadyInCart = this.shopCartListSelected().some(
      (i) => i.seccourseId === item.seccourseId
    );

    if (alreadyInCart) {
      this.shopCartListSelected.update((current) =>
        current.filter((i) => i.seccourseId !== item.seccourseId)
      );
    } else {
      this.shopCartListSelected.update((current) => [...current, item]);
    }
  }
}
