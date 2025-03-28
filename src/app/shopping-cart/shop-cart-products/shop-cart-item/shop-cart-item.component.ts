import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { WatchIconComponent } from '../../../shared/icons/watch-icon/watch-icon.component';
import { CourseSessionIconComponent } from '../../../shared/icons/course-session-icon/course-session-icon.component';
import { AsyncCourseIconComponent } from '../../../shared/icons/async-course-icon/async-course-icon.component';
import { CartInputSelectedIconComponent } from '../../../shared/icons/cart-input-selected-icon/cart-input-selected-icon.component';
import { CartInputIconComponent } from '../../../shared/icons/cart-input-icon/cart-input-icon.component';
import { ISecondaryCourseSummary } from '../../../courses/interface/secondary-course/Secondary-Course';
import { DateFormatPipe } from '../../../core/pipes/date-format.pipe';
import { ComnigSoonCourseIconComponent } from '../../../shared/icons/comnig-soon-course-icon/comnig-soon-course-icon.component';
import { SyncCourseIconComponent } from '../../../shared/icons/sync-course-icon/sync-course-icon.component';
import { DeleteIconComponent } from '../../../shared/icons/delete-icon/delete-icon.component';
import { PaymentService } from '../../services/payment.service';
import { ThemeService } from '../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shop-cart-item',
  standalone: true,
  imports: [
    WatchIconComponent,
    CourseSessionIconComponent,
    AsyncCourseIconComponent,
    CartInputSelectedIconComponent,
    CartInputIconComponent,
    DateFormatPipe,
    ComnigSoonCourseIconComponent,
    SyncCourseIconComponent,
    DeleteIconComponent,
    AsyncPipe,
  ],
  templateUrl: './shop-cart-item.component.html',
  styleUrl: './shop-cart-item.component.scss',
})
export class ShopCartItemComponent {
  @Input() cartItem!: ISecondaryCourseSummary;
  @Output() itemSelected = new EventEmitter<ISecondaryCourseSummary>();

  cartService: PaymentService = inject(PaymentService);
  themeService: ThemeService = inject(ThemeService);

  checkItem: boolean = false;

  checkCartItem() {
    this.checkItem = !this.checkItem;
    this.itemSelected.emit(this.cartItem);
    this.cartService.addItemToCartSelected(this.cartItem);
  }

  removeCartItem() {
    this.cartService.deleteItemFromCart(this.cartItem);
  }
}
