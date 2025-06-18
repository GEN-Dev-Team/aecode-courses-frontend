import { Component, computed, inject, signal, Signal } from '@angular/core';
import { WatchIconComponent } from '../../../shared/icons/watch-icon/watch-icon.component';
import { UnitCourseIconComponent } from '../../../shared/icons/unit-course-icon/unit-course-icon.component';

import { CourseInvestComponent } from '../../components/course-invest/course-invest.component';
import { DomSanitizer } from '@angular/platform-browser';
import { SecondaryCourseService } from '../../services/secondary-course.service';
import { AsyncPipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { CourseOverlayComponent } from '../../../shared/layouts/course-overlay/course-overlay.component';
import { CourseLandingUnitComponent } from '../../components/course-landing-unit/course-landing-unit.component';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ComnigSoonCourseIconComponent } from '../../../shared/icons/comnig-soon-course-icon/comnig-soon-course-icon.component';
import { SyncCourseIconComponent } from '../../../shared/icons/sync-course-icon/sync-course-icon.component';
import { AsyncCourseIconComponent } from '../../../shared/icons/async-course-icon/async-course-icon.component';
import { BookIconComponent } from '../../icons/book-icon/book-icon.component';
import { CustomCourseButtonDirective } from '../../../shared/directives/custom-course-button.directive';
import { DateFormatPipe } from '../../../core/pipes/date-format.pipe';
import { ThemeService } from '../../../core/services/theme.service';
import { CourseService } from '../../services/course.service';
import { CourseExtraInformationComponent } from '../../components/course-extra-information/course-extra-information.component';

interface IModuleButton {
  id: number;
  name: string;
}

@Component({
  selector: 'app-course-landing-detail',
  standalone: true,
  imports: [
    WatchIconComponent,
    UnitCourseIconComponent,
    CourseInvestComponent,
    AsyncPipe,
    CourseOverlayComponent,
    CourseLandingUnitComponent,
    LoaderComponent,
    ComnigSoonCourseIconComponent,
    SyncCourseIconComponent,
    AsyncCourseIconComponent,
    CustomCourseButtonDirective,
    BookIconComponent,
    DateFormatPipe,
    AsyncPipe,
    CourseExtraInformationComponent,
  ],
  templateUrl: './course-landing-detail.component.html',
  styleUrl: './course-landing-detail.component.css',
})
export class CourseLandingDetailComponent {
  sanitizer: DomSanitizer = inject(DomSanitizer);
  secondaryCourseService: SecondaryCourseService = inject(
    SecondaryCourseService
  );
  courseService: CourseService = inject(CourseService);
  router: ActivatedRoute = inject(ActivatedRoute);
  routing: Router = inject(Router);
  themeService: ThemeService = inject(ThemeService);

  secCourseUrlname = this.router.snapshot.paramMap.get('urlname');
  secCourseModule = this.router.snapshot.paramMap.get('module');

  courseData = signal<any>({});

  moduleButtons: IModuleButton[] = [
    { id: 1, name: 'Módulo 1' },
    { id: 2, name: 'Módulo 2' },
    { id: 3, name: 'Módulo 3' },
  ];

  url_base = environment.base;
  showIntroVideo: boolean = false;
  studyUnitIdSelected = 0;

  showMessageError: boolean = false;
  isSecondaryCourse: boolean = false;
  errorMessage: string = '';

  courseUnitsNumber = computed(() => {
    if (this.secCourseUrlname) {
      return this.courseData().studyplans.length;
    }
  });

  courseHoursNumber = computed(() => {
    if (this.secCourseUrlname) {
      return this.courseData().studyplans.reduce(
        (acc: any, item: any) => acc + item.hours,
        0
      );
    }
  });

  ngOnInit(): void {
    this.setCourseData();
  }

  setCourseData() {
    if (this.secCourseModule) {
      this.secCourseUrlname =
        this.secCourseUrlname + '/' + this.secCourseModule;
    }

    this.secondaryCourseService
      .getSecondaryCourseByAttribute('urlname', this.secCourseUrlname)
      .subscribe((data) => {
        this.courseData.set(data);
      });
  }

  goToCourseModule(module: string, program: string) {
    this.secondaryCourseService
      .getSecondaryCourseByModulexProgram(module, program)
      .subscribe((data) => {
        if ((data as any).urlname) {
          this.courseData.set(data);
          const urlname = data.urlname;

          this.routing.navigate([`/training/${urlname}`]);
        }
      });
  }
}
