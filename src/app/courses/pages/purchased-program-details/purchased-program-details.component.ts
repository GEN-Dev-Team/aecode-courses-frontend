import { Component, inject } from '@angular/core';
import { ProgramModulesComponent } from './components/program-modules/program-modules.component';
import { ProgramExtraInfoComponent } from './components/program-extra-info/program-extra-info.component';
import { ProgramSchedulesComponent } from './components/program-schedules/program-schedules.component';
import { ProgramCertificatesComponent } from './components/program-certificates/program-certificates.component';
import { CourseOverlayComponent } from '../../../shared/layouts/course-overlay/course-overlay.component';
import { CaretLeftIconComponent } from '../../../shared/icons/caret-left-icon/caret-left-icon.component';
import { SecondaryCourseService } from '../../services/secondary-course.service';
import { UserCourseAccessService } from '../../services/user-course-access.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-purchased-program-details',
  standalone: true,
  imports: [
    ProgramModulesComponent,
    ProgramExtraInfoComponent,
    ProgramSchedulesComponent,
    ProgramCertificatesComponent,
    CourseOverlayComponent,
    CaretLeftIconComponent,
  ],
  templateUrl: './purchased-program-details.component.html',
  styleUrl: './purchased-program-details.component.scss',
})
export class PurchasedProgramDetailsComponent {
  secondaryCourseService = inject(SecondaryCourseService);
  userCourseAccessService = inject(UserCourseAccessService);
  authService = inject(AuthService);
  location = inject(Location);
  router: ActivatedRoute = inject(ActivatedRoute);
  routing = inject(Router);

  coursePurchasedData = this.secondaryCourseService.coursePurchasedData;
  secCourseId = Number(this.router.snapshot.paramMap.get('courseId'));

  ngOnInit(): void {
    this.setCourseData();
  }

  setCourseData() {
    const userId = this.authService.getUserDetails()?.userId;

    this.secondaryCourseService
      .getCourseDataByUserId(userId, this.secCourseId)
      .subscribe({
        next: (response) => {
          this.coursePurchasedData.set(response);
          console.log(this.coursePurchasedData());
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  goBack() {
    this.location.back();
  }

  goToMyCourses() {
    const userId = this.authService.getUserDetails()?.userId;
    this.routing.navigate(['/profile/' + userId + '/my-courses']);
  }
}
