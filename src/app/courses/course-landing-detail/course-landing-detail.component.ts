import { Component, inject } from '@angular/core';
import { CourseSessionIconComponent } from '../../shared/icons/course-session-icon/course-session-icon.component';
import { WatchIconComponent } from '../../shared/icons/watch-icon/watch-icon.component';
import { UnitCourseIconComponent } from '../../shared/icons/unit-course-icon/unit-course-icon.component';

import { CourseInvestComponent } from './course-invest/course-invest.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CourseExtraInformationComponent } from './course-extra-information/course-extra-information.component';
import { SecondaryCourseService } from '../services/secondary-course.service';
import { map, Observable } from 'rxjs';
import { ISecondaryCourse } from '../interface/secondary-course/Secondary-Course';
import { AsyncPipe, NgIf } from '@angular/common';
import { environment } from '../../../environment/environment';
import { CourseOverlayComponent } from '../../shared/layouts/course-overlay/course-overlay.component';
import { CourseLandingUnitComponent } from './course-landing-unit/course-landing-unit.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { PlayIconComponent } from '../../shared/icons/play-icon/play-icon.component';
import { ActivatedRoute } from '@angular/router';
import { AddBaseUrlPipe } from '../../core/pipes/add-base-url.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-landing-detail',
  standalone: true,
  imports: [
    CourseSessionIconComponent,
    WatchIconComponent,
    UnitCourseIconComponent,
    CourseInvestComponent,
    ModalComponent,
    CourseExtraInformationComponent,
    AsyncPipe,
    CourseOverlayComponent,
    CourseLandingUnitComponent,
    LoaderComponent,
    PlayIconComponent,
    AddBaseUrlPipe,
  ],
  templateUrl: './course-landing-detail.component.html',
  styleUrl: './course-landing-detail.component.css',
})
export class CourseLandingDetailComponent {
  sanitizer: DomSanitizer = inject(DomSanitizer);
  secondaryCourseService: SecondaryCourseService = inject(
    SecondaryCourseService
  );
  router: ActivatedRoute = inject(ActivatedRoute);
  toastService = inject(ToastrService);

  secCourseId = Number(this.router.snapshot.paramMap.get('secCourseId'));

  secondaryCourseData$: Observable<ISecondaryCourse> =
    this.secondaryCourseService.getSecondaryCourseById(this.secCourseId);

  url_base = environment.base;
  loopList: number[] = [1, 2, 3];
  showIntroVideo: boolean = false;
  url: string = '';

  youtubeVideo$: Observable<SafeResourceUrl> = this.secondaryCourseData$.pipe(
    map((data) => {
      this.url = data.videoUrl;
      return this.sanitizer.bypassSecurityTrustResourceUrl(data.videoUrl);
    })
  );

  courseUnitsNumber$: Observable<number> = this.secondaryCourseData$.pipe(
    map((data) => data.studyplans.length)
  );
  courseSessionsNumber$: Observable<number> = this.secondaryCourseData$.pipe(
    map((data) =>
      data.studyplans.reduce((acc, session) => acc + session.sessions.length, 0)
    )
  );

  courseHoursNumber$: Observable<number> = this.secondaryCourseData$.pipe(
    map((data) =>
      data.studyplans.reduce((acc, session) => acc + session.hours, 0)
    )
  );

  showCourseVideo() {
    if (this.url) {
      this.showIntroVideo = true;
    } else {
      this.toastService.warning('¡Video no disponible!');
    }
  }
}
