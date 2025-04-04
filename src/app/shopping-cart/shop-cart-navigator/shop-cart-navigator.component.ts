import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ShoppingCartIconComponent } from '../../courses/icons/shopping-cart-icon/shopping-cart-icon.component';
import { ThemeService } from '../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { MessageBoxService } from '../../core/services/message-box.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-shop-cart-navigator',
  standalone: true,
  imports: [ShoppingCartIconComponent, AsyncPipe],
  templateUrl: './shop-cart-navigator.component.html',
  styleUrl: './shop-cart-navigator.component.scss',
})
export class ShopCartNavigatorComponent {
  @Output() changeStep = new EventEmitter<string>();
  @Input() stepSelected: string = '1';

  themeService: ThemeService = inject(ThemeService);
  messageBoxService: MessageBoxService = inject(MessageBoxService);
  authService: AuthService = inject(AuthService);

  checkoutSteps: any[] = [
    { step: '1', title: 'Carrito', isSelected: true },
    { step: '2', title: 'Pagar', isSelected: false },
    { step: '3', title: 'Confirmación', isSelected: false },
  ];

  changeToFirstStep(actualItem: any) {
    if (actualItem.step === '2' && !this.authService.hasToken()) {
      this.messageBoxService.showMessageBox(
        '¡Parece que algo salió mal!',
        'Debes iniciar sesión para poder continuar con tu compra.',
        false
      );
      return;
    }

    if (actualItem.step !== '3') {
      this.changeStep.emit(actualItem.step);
    }
  }
}
