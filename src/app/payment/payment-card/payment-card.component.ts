import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-card',
  standalone: true,
  imports: [CommonModule],
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

  purchaseItems = [
    { name: 'Waterproof Mobile Phone', quantity: 1, price: 450 },
  ];
  total!: string;

  ngOnInit(): void {}
}
