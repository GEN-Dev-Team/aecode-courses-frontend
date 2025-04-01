import { Component, inject, Input } from '@angular/core';
import { ShoppingCartIconComponent } from '../../courses/icons/shopping-cart-icon/shopping-cart-icon.component';
import { ThemeService } from '../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shop-cart-navigator',
  standalone: true,
  imports: [ShoppingCartIconComponent, AsyncPipe],
  templateUrl: './shop-cart-navigator.component.html',
  styleUrl: './shop-cart-navigator.component.scss',
})
export class ShopCartNavigatorComponent {
  @Input() stepSelected: string = '1';

  themeService: ThemeService = inject(ThemeService);

  checkoutSteps: any[] = [
    { step: '1', title: 'Carrito', isSelected: true },
    { step: '2', title: 'Pagar', isSelected: false },
    { step: '3', title: 'Confirmación', isSelected: false },
  ];

  setStep(step: number) {
    this.checkoutSteps.forEach((item) => {
      item.isSelected = item.step === step;
    });
  }
}
