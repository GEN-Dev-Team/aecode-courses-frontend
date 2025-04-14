import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environment/environment';
import { ISecondaryCourseSummary } from '../../courses/interface/secondary-course/Secondary-Course';
import { BrowserService } from '../../core/services/browser.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  browserService: BrowserService = inject(BrowserService);

  shopCartList = signal<ISecondaryCourseSummary[]>([]);
  shopCartListSelected = signal<ISecondaryCourseSummary[]>([]);
  paymentDetails = signal<any>({});
  showPaymentModal = signal(false);

  totalCartRegularPrice = computed(() => {
    const shopCartListValue = this.shopCartListSelected();
    return shopCartListValue.reduce((acc, item) => acc + item.priceRegular, 0);
  });

  totalCartDiscount = computed(() => {
    const shopCartListValue = this.shopCartListSelected();
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
    return (this.totalAmountWithTax() - this.totalWithoutTax()).toFixed(2);
  });

  initializeShopCartList() {
    if (this.browserService.isBrowser()) {
      const cart = localStorage.getItem('cart') || '[]';
      const cartSelected = localStorage.getItem('cartSelected') || '[]';

      if (cart === '[]') return;
      this.shopCartList.set(JSON.parse(cart));

      if (cartSelected === '[]') return;
      this.shopCartListSelected.set(JSON.parse(cartSelected));
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
    this.deleteItem(item);

    localStorage.setItem(
      'cartSelected',
      JSON.stringify(this.shopCartListSelected())
    );
    localStorage.setItem('cart', JSON.stringify(this.shopCartList()));
  }

  deleteItem(item: ISecondaryCourseSummary) {
    this.shopCartList.update((current) =>
      current.filter((i) => i.seccourseId !== item.seccourseId)
    );

    this.shopCartListSelected.update((current) =>
      current.filter((i) => i.seccourseId !== item.seccourseId)
    );
  }

  updateIsSelectedinCart(item: ISecondaryCourseSummary) {
    this.shopCartList.update((current) =>
      current.map((course) =>
        course.seccourseId === item.seccourseId
          ? { ...course, isSelectedinCart: item.isSelectedinCart }
          : course
      )
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

    localStorage.setItem(
      'cartSelected',
      JSON.stringify(this.shopCartListSelected())
    );
  }

  cleanShopCartList() {
    this.shopCartList()
      .filter((item) => item.isSelectedinCart)
      .forEach((item) => this.deleteItem(item));

    localStorage.setItem(
      'cartSelected',
      JSON.stringify(this.shopCartListSelected())
    );
    localStorage.setItem('cart', JSON.stringify(this.shopCartList()));
  }
}
