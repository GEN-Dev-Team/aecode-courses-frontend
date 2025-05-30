import {
  Component,
  computed,
  effect,
  inject,
  Input,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '../../../core/pipes/date-format.pipe';
import { BrowserService } from '../../../core/services/browser.service';
import { MessageBoxService } from '../../../core/services/message-box.service';
import { ThemeService } from '../../../core/services/theme.service';
import { CustomCourseButtonDirective } from '../../../shared/directives/custom-course-button.directive';
import { AccessToCourseIconComponent } from '../../../shared/icons/access-to-course-icon/access-to-course-icon.component';
import { AsyncCourseIconComponent } from '../../../shared/icons/async-course-icon/async-course-icon.component';
import { ComnigSoonCourseIconComponent } from '../../../shared/icons/comnig-soon-course-icon/comnig-soon-course-icon.component';
import { CourseSessionIconComponent } from '../../../shared/icons/course-session-icon/course-session-icon.component';
import { DownloadKitIconComponent } from '../../../shared/icons/download-kit-icon/download-kit-icon.component';
import { OfferbgIconComponent } from '../../../shared/icons/offerbg-icon/offerbg-icon.component';
import { SyncCourseIconComponent } from '../../../shared/icons/sync-course-icon/sync-course-icon.component';
import { WatchIconComponent } from '../../../shared/icons/watch-icon/watch-icon.component';
import { PaymentService } from '../../../shopping-cart/services/payment.service';
import { ShoppingCartIconComponent } from '../../icons/shopping-cart-icon/shopping-cart-icon.component';
import { SecondaryCourseService } from '../../services/secondary-course.service';
import { AuthService } from '../../../core/services/auth.service';
import { UserCourseAccessService } from '../../services/user-course-access.service';
import { ManageUserDataService } from '../../../user-profile/services/manage-user-data.service';
import {
  defaultSecondaryCourseSummary,
  ISecondaryCourseSummary,
} from '../../interface/secondary-course/Secondary-Course';

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
    DownloadKitIconComponent,
    CustomCourseButtonDirective,
    DateFormatPipe,
  ],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
})
export class CourseItemComponent {
  @Input() isMasiveCourse: boolean = false;

  _course = signal<ISecondaryCourseSummary>(defaultSecondaryCourseSummary);
  @Input() set course(value: ISecondaryCourseSummary) {
    this._course.set(value);
  }

  browserService: BrowserService = inject(BrowserService);
  router: Router = inject(Router);
  themeService: ThemeService = inject(ThemeService);
  cartService: PaymentService = inject(PaymentService);
  messageBoxService: MessageBoxService = inject(MessageBoxService);
  secondaryCourseService = inject(SecondaryCourseService);
  authService = inject(AuthService);
  manageUserService = inject(ManageUserDataService);

  finalPrice = signal(0);

  message = 'El módulo ya se encuentra en tu carrito de compras.';
  title = '¡Módulo repetido!';
  isMessageTypeSuccess = false;
  purchasedCourse = false;

  constructor() {
    effect(() => {
      if (this.manageUserService.userDataInfo().userId !== 0) {
        this.secondaryCourseService
          .checkUserCourseAccess(
            this.manageUserService.userDataInfo().userId,
            this._course().seccourseId
          )
          .subscribe({
            next: (res) => {
              this.purchasedCourse = true;
            },
            error: (error) => {
              this.purchasedCourse = false;
            },
          });
      }
    });
  }

  discountPrice = computed(() => {
    if (this._course().isOnSale && this._course().discountPercentage > 0) {
      const priceDiscounted = Math.round(
        (this._course().priceRegular *
          (100 - this._course().discountPercentage)) /
          100
      );
      return priceDiscounted;
    } else {
      return this._course().priceRegular;
    }
  });

  showCourseDetails() {
    const urlname = this._course().urlname;

    if (this.checkIfCourseIsPurchased()) {
      if (
        this._course().seccourseId === 101 ||
        this._course().seccourseId === 100
      ) {
        this.router.navigate([
          `/training/my-courses/${this._course().seccourseId}/${
            this._course().urlname
          }`,
        ]);
      } else {
        this.messageBoxService.showMessageBox(
          'Acceso restringido',
          'Se habilitará el acceso en 48 horas',
          false
        );
      }
    } else {
      this.browserService.navigateAndScroll(`training/${urlname}`, 0);
    }
  }

  downloadKit(event: Event) {
    if (this.isMasiveCourse) {
      event.stopPropagation();
      if (
        this.browserService.isBrowser() &&
        this.isMasiveCourse &&
        this._course().brochureUrl
      ) {
        window.open(this._course().brochureUrl, '_blank');
      }
    }
  }

  goToPay(event: Event) {
    event.stopPropagation();

    if (!this.checkIfUserIsLogged()) return;

    if (this.checkIfCourseIsPurchased()) return;

    this._course().isSelectedinCart = false;
    let response = this.cartService.addItemToCart(this._course());

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

  checkIfCourseIsPurchased(): boolean {
    if (this.purchasedCourse) {
      return true;
    }

    return false;
  }

  checkIfUserIsLogged(): boolean {
    if (!this.authService.hasToken()) {
      this.messageBoxService.showMessageBox(
        'Iniciar sesión para continuar',
        'Este paso es indispensable para añadir módulos a tu carrito de compras.',
        false
      );

      this.messageBoxService.redirectTo.set('login');

      return false;
    }

    return true;
  }
}
