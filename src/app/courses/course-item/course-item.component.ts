import { Component, computed, inject, Input, signal } from '@angular/core';
import { WatchIconComponent } from '../../shared/icons/watch-icon/watch-icon.component';
import { CourseSessionIconComponent } from '../../shared/icons/course-session-icon/course-session-icon.component';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { BrowserService } from '../../core/services/browser.service';
import { IStudyPlan } from '../interface/secondary-course/StudyPlan';
import { environment } from '../../../environment/environment';
import { IModule } from '../interface/Module';
import { IUnit } from '../interface/Unit';
import { CommonModule } from '@angular/common';
import { ShoppingCartIconComponent } from '../icons/shopping-cart-icon/shopping-cart-icon.component';
import { PaymentService } from '../../payment/services/payment.service';
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
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { DateFormatPipe } from '../../core/pipes/date-format.pipe';
import { SecondaryCourseService } from '../services/secondary-course.service';
import { map, Observable } from 'rxjs';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

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
    ModalComponent,
    DateFormatPipe,
    LoaderComponent,
  ],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
})
export class CourseItemComponent {
  @Input() isMasiveCourse: boolean = false;
  @Input() courseId: number = 0;

  courseService: CourseService = inject(CourseService);
  secondaryCourseService: SecondaryCourseService = inject(
    SecondaryCourseService
  );
  browserService: BrowserService = inject(BrowserService);
  router: Router = inject(Router);
  paymentService: PaymentService = inject(PaymentService);

  course$!: Observable<any>;
  // secondaryCourseMainImgUrl$ = this.course$.pipe(
  //   map((data) => {
  //     return environment.base + data.principalimage;
  //   })
  // );

  // masiveCourseMainImgUrl$ = this.course$.pipe(
  //   map((data) => {
  //     return environment.base + data.coverimage;
  //   })
  // );

  courseTitle = '';
  urlKit = '';
  module = '';
  isOnSale = false;
  discountPercentage = 0;
  priceRegular = 0;

  finalPrice = signal(0);
  showBlockedModal = false;
  message = '';

  discountPrice = computed(() => {
    if (this.isOnSale && this.discountPercentage > 0) {
      const priceDiscounted = Math.round(
        (this.priceRegular * (100 - this.discountPercentage)) / 100
      );
      return priceDiscounted;
    } else {
      return this.priceRegular;
    }
  });

  ngOnInit() {
    if (!this.isMasiveCourse) {
      this.course$ = this.secondaryCourseService.getSecondaryCourseById(
        this.courseId
      );
    } else {
      this.course$ = this.courseService.getCourse(this.courseId);
    }

    this.course$.subscribe((data) => {
      this.courseTitle = data.title;
      this.urlKit = data.urlkit;
      this.module = data.module;
      this.isOnSale = data.isOnSale;
      this.discountPercentage = data.discountPercentage;
      this.priceRegular = data.priceRegular;
    });
  }

  showCourseDetails() {
    if (this.isMasiveCourse) {
      this.message = `El contenido del programa "${this.courseTitle}" estará disponible próximamente.`;
      this.showBlockedModal = true;

      return;

      this.browserService.navigateAndScroll(
        `training/e-learning/${this.courseId}`,
        0
      );
    } else {
      {
        this.browserService.navigateAndScroll(
          `training/module/${this.courseId}`,
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
        this.urlKit
      ) {
        window.open(this.urlKit, '_blank');
      }
    }
  }

  goToPay(event: Event) {
    event.stopPropagation();
    let message = '';

    if (this.isMasiveCourse) {
      message = `Hola AECODE. Me gustaría recibir más información sobre el programa de "${this.courseTitle}".`;
    } else {
      message = `Hola AECODE. Me gustaría adquirir el programa de "${
        this.courseTitle
      } - ${
        this.module
      }" a un costo de ${this.discountPrice()} USD. ¿Podrías indicarme cómo proceder?`;
    }

    const whatsappUrl = `https://api.whatsapp.com/send?phone=51900121245&text=${encodeURIComponent(
      message
    )}`;

    if (this.browserService.isBrowser()) {
      window.open(whatsappUrl, '_blank');
    }

    return;

    const price = this.discountPrice();

    if (price > 0) {
      this.router.navigate(['payment']);
      this.paymentService.paymentDetails.set({
        courseName: this.courseTitle,
        amount: price,
      });
    }
  }
}
