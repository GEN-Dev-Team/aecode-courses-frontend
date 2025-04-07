import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, inject, Input } from '@angular/core';
import { ShoppingCartIconComponent } from '../../icons/shopping-cart-icon/shopping-cart-icon.component';
import { BrowserService } from '../../../core/services/browser.service';
import { ThemeService } from '../../../core/services/theme.service';
import { PaymentService } from '../../../shopping-cart/services/payment.service';
import { ContentBlockedComponent } from '../../../shared/components/content-blocked/content-blocked.component';
import { MessageBoxService } from '../../../core/services/message-box.service';

@Component({
  selector: 'app-course-invest',
  standalone: true,
  imports: [CommonModule, ShoppingCartIconComponent, AsyncPipe],
  templateUrl: './course-invest.component.html',
  styleUrl: './course-invest.component.css',
})
export class CourseInvestComponent {
  browserService: BrowserService = inject(BrowserService);
  themeService: ThemeService = inject(ThemeService);
  cartService: PaymentService = inject(PaymentService);
  messageBoxService: MessageBoxService = inject(MessageBoxService);

  @Input() course: any = {};

  showMessageModal = false;
  message = 'El módulo ya se encuentra en tu carrito de compras.';
  title = '¡Módulo repetido!';
  isMessageTypeSuccess = false;

  goToPay() {
    this.course.isSelectedinCart = false;
    let response = this.cartService.addItemToCart(this.course);

    if (response === 1) {
      this.message =
        'El módulo se ha agregado exitosamente a tu carrito de compras.';
      this.title = '¡Módulo agregado!';
      this.isMessageTypeSuccess = true;
    } else {
      this.message = 'El módulo ya se encuentra en tu carrito de compras.';
      this.title = '¡Módulo repetido!';
      this.isMessageTypeSuccess = true;
    }
    this.messageBoxService.showMessageBox(
      this.title,
      this.message,
      this.isMessageTypeSuccess
    );
  }
}
