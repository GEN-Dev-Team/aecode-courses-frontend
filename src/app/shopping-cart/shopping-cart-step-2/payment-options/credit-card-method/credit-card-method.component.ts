import { Component, inject } from '@angular/core';
import { CardItemComponent } from './card-item/card-item.component';
import { ThemeService } from '../../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { ShopCartWhatsappButtonComponent } from '../../../components/shop-cart-whatsapp-button/shop-cart-whatsapp-button.component';
import { PaymentService } from '../../../services/payment.service';

@Component({
  selector: 'app-credit-card-method',
  standalone: true,
  imports: [CardItemComponent, AsyncPipe, ShopCartWhatsappButtonComponent],
  templateUrl: './credit-card-method.component.html',
  styleUrl: './credit-card-method.component.scss',
})
export class CreditCardMethodComponent {
  themeService = inject(ThemeService);
  paymentService = inject(PaymentService);

  cardList = [
    {
      id: 1,
      name: 'Banco Interbank',
      penAccNumber: '2003006175056',
      penAccNumberCCI: '00320000300617505635',
      usdAccNumber: '2003006175063',
      usdAccNumberCCI: '00320000300617506331',
    },
    {
      id: 2,
      name: 'Banco de Crédito del Perú / BCP',
      penAccNumber: '19105042934072',
      penAccNumberCCI: '00219110504293407256',
      usdAccNumber: '19105043000139',
      usdAccNumberCCI: '00219110504300013950',
    },
  ];
}
