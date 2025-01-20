import { computed, Injectable, signal } from '@angular/core';
import { environment } from '../../../environment/environment';

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
  private api = environment.base + '/payment';
  paymentDetails = signal<IPayment>(InitIPayment);
}
