import { Component, inject } from '@angular/core';
import { CardItemComponent } from './card-item/card-item.component';
import { WhatsappIconComponent } from '../../../../shared/icons/whatsapp-icon/whatsapp-icon.component';
import { WarningPaymentIconComponent } from '../../../icons/warning-payment-icon/warning-payment-icon.component';
import { ThemeService } from '../../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-credit-card-method',
  standalone: true,
  imports: [
    CardItemComponent,
    WhatsappIconComponent,
    WarningPaymentIconComponent,
    AsyncPipe,
  ],
  templateUrl: './credit-card-method.component.html',
  styleUrl: './credit-card-method.component.scss',
})
export class CreditCardMethodComponent {
  themeService = inject(ThemeService);

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
