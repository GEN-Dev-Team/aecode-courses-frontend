import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, inject, Input } from '@angular/core';
import { ShoppingCartIconComponent } from '../../icons/shopping-cart-icon/shopping-cart-icon.component';
import { BrowserService } from '../../../core/services/browser.service';
import { ThemeService } from '../../../core/services/theme.service';

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

  @Input() course: any = {};

  wsspMessageConsultar = `Quiero contactar con un asesor para mas información del modulo ${this.course.title}.`;

  goToPay(dicountedPrice: number) {
    const message = `Me gustaría adquirir el programa de "${
      this.course.title
    } - ${this.course.module}" a un costo de ${Math.round(
      dicountedPrice
    )} USD. ¿Podrías indicarme como proceder?`;

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
