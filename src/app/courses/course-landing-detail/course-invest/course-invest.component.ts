import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input } from '@angular/core';
import { ShoppingCartIconComponent } from '../../icons/shopping-cart-icon/shopping-cart-icon.component';
import { BrowserService } from '../../../core/services/browser.service';

@Component({
  selector: 'app-course-invest',
  standalone: true,
  imports: [CommonModule, ShoppingCartIconComponent],
  templateUrl: './course-invest.component.html',
  styleUrl: './course-invest.component.css',
})
export class CourseInvestComponent {
  browserService: BrowserService = inject(BrowserService);

  @Input() course: any = {};

  finalPriceRegular: number = 0;

  discountedPrice =
    (this.course.priceRegular * (100 - this.course.discountPercentage)) / 100;

  wsspMessageConsultar = `Quiero contactar con un asesor para mas información del modulo ${this.course.title}.`;

  ngOnInit(): void {
    this.finalPriceRegular = Math.round(
      this.course.priceRegular -
        (this.course.priceRegular * this.course.discount) / 100
    );
  }

  goToPay() {
    const message = `Me gustaría adquirir el programa de "${this.course.title} - ${this.course.module}" a un costo de ${this.discountedPrice} USD. ¿Podrías indicarme como proceder?`;

    const deafulMessage = `Me gustaría adquirir el programa de "${this.course.title} - ${this.course.module}" a un costo de ${this.course.priceRegular} USD. ¿Podrías indicarme como proceder?`;

    let wsspMessageComprar = '';

    if (this.course.isOnSale) {
      wsspMessageComprar = `https://api.whatsapp.com/send?phone=+51900121245&text=Hola AECODE. ${encodeURIComponent(
        message
      )}`;
    } else {
      wsspMessageComprar = `https://api.whatsapp.com/send?phone=+51900121245&text=Hola AECODE. ${encodeURIComponent(
        deafulMessage
      )}`;
    }

    if (this.browserService.isBrowser()) {
      window.open(wsspMessageComprar, '_blank');
    }
  }
}
