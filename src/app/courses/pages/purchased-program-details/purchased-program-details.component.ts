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

  coursePurchasedData = this.secondaryCourseService.coursePurchasedData;

  location = inject(Location);

  ngOnInit(): void {
    // this.userCourseAccessService.getUserCourseAccess(35).subscribe({
    //   next: (response) => {
    //     console.log(response);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });

    this.secondaryCourseService.getCourseDataByUserId(35, 101).subscribe({
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
}
