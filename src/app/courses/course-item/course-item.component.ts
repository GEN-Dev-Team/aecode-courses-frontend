import { Component, computed, inject, Input, signal } from '@angular/core';
import { WatchIconComponent } from '../../shared/icons/watch-icon/watch-icon.component';
import { CourseSessionIconComponent } from '../../shared/icons/course-session-icon/course-session-icon.component';
import { Router } from '@angular/router';
import { BrowserService } from '../../core/services/browser.service';
import { CommonModule } from '@angular/common';
import { ShoppingCartIconComponent } from '../icons/shopping-cart-icon/shopping-cart-icon.component';
import { ComnigSoonCourseIconComponent } from '../../shared/icons/comnig-soon-course-icon/comnig-soon-course-icon.component';
import { SyncCourseIconComponent } from '../../shared/icons/sync-course-icon/sync-course-icon.component';
import { AsyncCourseIconComponent } from '../../shared/icons/async-course-icon/async-course-icon.component';
import { AccessToCourseIconComponent } from '../../shared/icons/access-to-course-icon/access-to-course-icon.component';
import { OfferbgIconComponent } from '../../shared/icons/offerbg-icon/offerbg-icon.component';
import { ELearningIconComponent } from '../../shared/icons/e-learning-icon/e-learning-icon.component';
import { DownloadKitIconComponent } from '../../shared/icons/download-kit-icon/download-kit-icon.component';
import { CustomCourseButtonDirective } from '../../shared/directives/custom-course-button.directive';
import { WhatsappIconComponent } from '../../shared/icons/whatsapp-icon/whatsapp-icon.component';
import { ContentBlockedComponent } from '../../shared/components/content-blocked/content-blocked.component';
import { DateFormatPipe } from '../../core/pipes/date-format.pipe';
import { ThemeService } from '../../core/services/theme.service';
import { PaymentService } from '../../shopping-cart/services/payment.service';
import { MessageBoxService } from '../../core/services/message-box.service';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [
    WatchIconComponent,
    CourseSessionIconComponent,
    CommonModule,
    ShoppingCartIconComponent,
    ComnigSoonCourseIconComponent,
    SyncCourseIconComponent,
    AsyncCourseIconComponent,
    AccessToCourseIconComponent,
    OfferbgIconComponent,
    ELearningIconComponent,
    DownloadKitIconComponent,
    CustomCourseButtonDirective,
    WhatsappIconComponent,
    ContentBlockedComponent,
    DateFormatPipe,
  ],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
})
export class CourseItemComponent {
  @Input() isMasiveCourse: boolean = false;
  @Input() course!: any;

  browserService: BrowserService = inject(BrowserService);
  router: Router = inject(Router);
  themeService: ThemeService = inject(ThemeService);
  cartService: PaymentService = inject(PaymentService);
  messageBoxService: MessageBoxService = inject(MessageBoxService);

  finalPrice = signal(0);

  message = 'El módulo ya se encuentra en tu carrito de compras.';
  title = '¡Módulo repetido!';
  isMessageTypeSuccess = false;

  discountPrice = computed(() => {
    if (this.course.isOnSale && this.course.discountPercentage > 0) {
      const priceDiscounted = Math.round(
        (this.course.priceRegular * (100 - this.course.discountPercentage)) /
          100
      );
      return priceDiscounted;
    } else {
      return this.course.priceRegular;
    }
  });

  showCourseDetails() {
    if (this.isMasiveCourse) {
      this.title = '¡Estamos trabajando en ello!';
      this.message = `El contenido del programa "${this.course.title}" estará disponible próximamente.`;
      ('El módulo se ha agregado exitosamente a tu carrito de compras.');
      this.isMessageTypeSuccess = false;

      this.messageBoxService.showMessageBox(
        this.title,
        this.message,
        this.isMessageTypeSuccess
      );

      return;
      this.browserService.navigateAndScroll(
        `training/e-learning/${this.course.courseId}`,
        0
      );
    } else {
      {
        this.browserService.navigateAndScroll(
          `training/module/${this.course.seccourseId}`,
          0
        );
      }
    }
  }

  downloadKit(event: Event) {
    if (this.isMasiveCourse) {
      event.stopPropagation();
      if (
        this.browserService.isBrowser() &&
        this.isMasiveCourse &&
        this.course.urlkit
      ) {
        window.open(this.course.urlkit, '_blank');
      }
    }
  }

  goToPay(event: Event) {
    event.stopPropagation();

    if (this.isMasiveCourse && this.browserService.isBrowser()) {
      const whatsappUrl = `https://api.whatsapp.com/send?phone=51900121245&text=Hola AECODE. Me gustaría recibir más información sobre el programa de "${this.course.title}".`;

      window.open(whatsappUrl, '_blank');
    } else {
      this.course.isSelectedinCart = false;
      let response = this.cartService.addItemToCart(this.course);

      if (response === 1) {
        this.message =
          'El módulo se ha agregado exitosamente a tu carrito de compras.';
        this.title = '¡Módulo agregado!';
        this.isMessageTypeSuccess = true;
      } else {
        this.message = 'El módulo ya se encuentra en tu carrito de compras.';
        this.title = '¡Módulo repetido!';
        this.isMessageTypeSuccess = true;
      }
      this.messageBoxService.showMessageBox(
        this.title,
        this.message,
        this.isMessageTypeSuccess
      );
    }
  }
}
