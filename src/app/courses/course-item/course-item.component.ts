import { Component, inject, Input } from '@angular/core';
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
import { AddBaseUrlPipe } from '../../core/pipes/add-base-url.pipe';
import { ShoppingCartIconComponent } from '../icons/shopping-cart-icon/shopping-cart-icon.component';
import { PaymentService } from '../../payment/services/payment.service';
import { ComnigSoonCourseIconComponent } from '../../shared/icons/comnig-soon-course-icon/comnig-soon-course-icon.component';
import { SyncCourseIconComponent } from '../../shared/icons/sync-course-icon/sync-course-icon.component';
import { AsyncCourseIconComponent } from '../../shared/icons/async-course-icon/async-course-icon.component';
import { AccessToCourseIconComponent } from '../../shared/icons/access-to-course-icon/access-to-course-icon.component';
import { OfferbgIconComponent } from '../../shared/icons/offerbg-icon/offerbg-icon.component';
import { ISecondaryCourse } from '../interface/secondary-course/Secondary-Course';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [
    WatchIconComponent,
    CourseSessionIconComponent,
    CommonModule,
    AddBaseUrlPipe,
    ShoppingCartIconComponent,
    ComnigSoonCourseIconComponent,
    SyncCourseIconComponent,
    AsyncCourseIconComponent,
    AccessToCourseIconComponent,
    OfferbgIconComponent,
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

  showCourseDetails(courseId: number) {
    this.browserService.navigateAndScroll(
      `courses/secondary-course-detail/${courseId}`,
      0
    );
  }

  showMasiveCourseDetails(courseId: number) {
    this.browserService.navigateAndScroll(
      `courses/masive-course-detail/${courseId}`,
      0
    );
  }

  goToPay(price: any) {
    const rounded_price = Math.round(price);
    this.router.navigate(['payment']);
    this.paymentService.paymentDetails.set({
      courseName: this.course.title,
      amount: rounded_price,
    });
  }
}
