import { Component, inject } from '@angular/core';
import { CourseSessionIconComponent } from '../../shared/icons/course-session-icon/course-session-icon.component';
import { WatchIconComponent } from '../../shared/icons/watch-icon/watch-icon.component';
import { UnitCourseIconComponent } from '../../shared/icons/unit-course-icon/unit-course-icon.component';
import { CaretUpIconComponent } from '../../shared/icons/caret-up-icon/caret-up-icon.component';
import { CaretDownIconComponent } from '../../shared/icons/caret-down-icon/caret-down-icon.component';
import { CourseInvestComponent } from './course-invest/course-invest.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CourseExtraInformationComponent } from './course-extra-information/course-extra-information.component';
import { SecondaryCourseService } from '../services/secondary-course.service';
import { map, Observable } from 'rxjs';
import { ISecondaryCourse } from '../interface/secondary-course/Secondary-Course';
import { AsyncPipe } from '@angular/common';
import { environment } from '../../../environment/environment';
import { CourseOverlayComponent } from '../../shared/layouts/course-overlay/course-overlay.component';

@Component({
  selector: 'app-course-landing-detail',
  standalone: true,
  imports: [
    CourseSessionIconComponent,
    WatchIconComponent,
    UnitCourseIconComponent,
    CaretUpIconComponent,
    CaretDownIconComponent,
    CourseInvestComponent,
    ModalComponent,
    CourseExtraInformationComponent,
    AsyncPipe,
    CourseOverlayComponent,
  ],
  templateUrl: './course-landing-detail.component.html',
  styleUrl: './course-landing-detail.component.css',
})
export class CourseLandingDetailComponent {
  sanitizer: DomSanitizer = inject(DomSanitizer);
  secondaryCourseService: SecondaryCourseService = inject(
    SecondaryCourseService
  );

  secondaryCourseData$: Observable<ISecondaryCourse> =
    this.secondaryCourseService.getSecondaryCourseById(1);

  url_base = environment.base;
  loopList: number[] = [1, 2, 3];
  showDropdownUnit: boolean = false;
  showIntroVideo: boolean = false;

  youtubeVideo$: Observable<SafeResourceUrl> = this.secondaryCourseData$.pipe(
    map((data) => this.sanitizer.bypassSecurityTrustResourceUrl(data.videoUrl))
  );

  courseUnitsNumber$: Observable<number> = this.secondaryCourseData$.pipe(
    map((data) => data.studyplans.length)
  );
  courseSessionsNumber$: Observable<number> = this.secondaryCourseData$.pipe(
    map((data) =>
      data.studyplans.reduce((acc, session) => acc + session.sessions.length, 0)
    )
  );

  ngOnInit(): void {
    this.secondaryCourseData$.subscribe((data) => {
      console.log('Secondary course data: ', data);
    });
  }

  openUnit(id: number) {
    this.showDropdownUnit = !this.showDropdownUnit;
  }
}
