import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import {
  ICreateOrderRequest,
  IPayPalConfig,
  ITransactionItem,
  NgxPayPalModule,
} from 'ngx-paypal';

@Component({
  selector: 'app-payment-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, NgxPayPalModule],
  templateUrl: './payment-card.component.html',
  styleUrl: './payment-card.component.css',
})
export class PaymentCardComponent {
  @Output() isClosed = new EventEmitter<boolean>();
  selectedMethod: string = 'yape-plin'; // Inicializamos con el método por defecto

  // Método para cambiar entre métodos de pago
  showPaymentMethod(method: string) {
    this.selectedMethod = method; // Actualiza el método de pago seleccionado
  }

  closeModal() {
    this.isClosed.emit(false);
  }

  public payPalConfig?: IPayPalConfig;
  purchaseItems = [
    { name: 'Waterproof Mobile Phone', quantity: 1, price: 450 },
  ];
  total!: string;

  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
    this.total = this.purchaseItems
      .map((x) => x.quantity * x.price)
      .reduce((a, b) => a + b, 0)
      .toString();
    const currency = 'USD';

    this.payPalConfig = {
      currency: currency,
      clientId:
        'AfA-ZZcJPTnBj17GpW0WKgLaJ1W_3lX6mHnpHo767HOnWpKt0IJPRQuGvTbQAkyucwm-np5AfKvfYTf6',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: currency,
                value: this.total,
                breakdown: {
                  item_total: {
                    currency_code: currency,
                    value: this.total,
                  },
                },
              },
              items: this.purchaseItems.map(
                (x) =>
                  <ITransactionItem>{
                    name: x.name,
                    quantity: x.quantity.toString(),
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                      currency_code: currency,
                      value: x.price.toString(),
                    },
                  }
              ),
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
