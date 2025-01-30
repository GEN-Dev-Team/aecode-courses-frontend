import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ShoppingCartIconComponent } from '../../icons/shopping-cart-icon/shopping-cart-icon.component';

@Component({
  selector: 'app-course-invest',
  standalone: true,
  imports: [CommonModule, ShoppingCartIconComponent],
  templateUrl: './course-invest.component.html',
  styleUrl: './course-invest.component.css',
})
export class CourseInvestComponent {
  @Input() promptPaymentPrice: number = 0;
  @Input() priceRegular: number = 0;
  @Input() discount: number = 0;
  @Input() courseTitle: string = '';

  finalPriceAcademy: number = 0;
  finalPriceRegular: number = 0;

  ngOnInit(): void {
    this.finalPriceRegular = Math.round(
      this.priceRegular - (this.priceRegular * this.discount) / 100
    );
  }
}
