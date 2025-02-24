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
  ],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
})
export class CourseItemComponent {
  @Input() isMasiveCourse: boolean = false;
  @Input() course: any = {};

  courseService: CourseService = inject(CourseService);
  browserService: BrowserService = inject(BrowserService);
  router: Router = inject(Router);
  paymentService: PaymentService = inject(PaymentService);

  secondaryCourseMainImgUrl = '';
  secondaryCourseSessions: number = 0;
  finalPrice = signal(0);
  showBlockedModal = false;
  message = '';

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

  ngOnInit() {
    if (!this.isMasiveCourse) {
      this.secondaryCourseMainImgUrl =
        environment.base + this.course.principalimage;
      this.course.studyplans.forEach((studyplan: IStudyPlan) => {
        this.secondaryCourseSessions += studyplan.sessions.length;
      });
    } else {
      this.secondaryCourseMainImgUrl =
        environment.base + this.course.coverimage;
      this.course.modules.forEach((module: IModule) => {
        module.units.forEach((unit: IUnit) => {
          this.secondaryCourseSessions += unit.sessions.length;
        });
      });
    }
  }

  showCourseDetails(course: any) {
    if (this.isMasiveCourse) {
      this.message = `El contenido del programa "${this.course.title}" estará disponible próximamente.`;
      this.showBlockedModal = true;

      return;

      this.browserService.navigateAndScroll(
        `training/e-learning/${course.courseId}`,
        0
      );
    } else {
      {
        this.browserService.navigateAndScroll(
          `training/module/${course.seccourseId}`,
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
    let message = '';

    if (this.isMasiveCourse) {
      message = `Hola AECODE. Me gustaría recibir más información sobre el programa de "${this.course.title}".`;
    } else {
      message = `Hola AECODE. Me gustaría adquirir el programa de "${
        this.course.title
      } - ${
        this.course.module
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
        courseName: this.course.title,
        amount: price,
      });
    }
  }
}
