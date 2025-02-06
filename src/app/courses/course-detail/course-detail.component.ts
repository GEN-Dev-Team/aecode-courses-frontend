import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { ICourse } from '../interface/Course';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ContentBlockedComponent } from '../../shared/components/content-blocked/content-blocked.component';
import { HouseIconComponent } from '../icons/house-icon/house-icon.component';
import { CaretRightIconComponent } from '../icons/caret-right-icon/caret-right-icon.component';
import { NextIconComponent } from '../icons/next-icon/next-icon.component';
import { PrevIconComponent } from '../icons/prev-icon/prev-icon.component';
import { CaretDownIconComponent } from '../icons/caret-down-icon/caret-down-icon.component';
import { AuthService } from '../../core/services/auth.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { CourseSessionService } from '../services/course-session.service';
import { ISession } from '../interface/Session';
import { LinkIconComponent } from '../icons/link-icon/link-icon.component';
import { PdfIconComponent } from '../icons/pdf-icon/pdf-icon.component';
import { DownloadIconComponent } from '../icons/download-icon/download-icon.component';
import { WorldIconComponent } from '../icons/world-icon/world-icon.component';
import { Observable } from 'rxjs';
import { CourseOverlayComponent } from '../../shared/layouts/course-overlay/course-overlay.component';
import { CourseModuleBoxComponent } from '../masive-course-detail/course-module-box/course-module-box.component';
import { CourseUnitComponent } from './course-unit/course-unit.component';
import { IModule } from '../interface/Module';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { AddBaseUrlPipe } from '../../core/pipes/add-base-url.pipe';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    ModalComponent,
    ContentBlockedComponent,
    HouseIconComponent,
    CaretRightIconComponent,
    CaretDownIconComponent,
    NextIconComponent,
    PrevIconComponent,
    NgClass,
    YoutubePlayerComponent,
    LinkIconComponent,
    PdfIconComponent,
    DownloadIconComponent,
    WorldIconComponent,
    AsyncPipe,
    CourseOverlayComponent,
    CourseModuleBoxComponent,
    CourseUnitComponent,
    LoaderComponent,
    AddBaseUrlPipe,
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  courseService: CourseService = inject(CourseService);
  authService: AuthService = inject(AuthService);
  courseSessionService: CourseSessionService = inject(CourseSessionService);

  course_id: number = Number(this.route.snapshot.params['courseId']);
  module_id: number = Number(this.route.snapshot.params['moduleId']);
  courseSessionSubject!: ISession;
  showBlockedModal = false;
  userHasAccessToCourse: boolean = true;
  userHasAccessToModule: boolean = true;
  isDescription = true;
  finalPrice = 0;

  course$: Observable<ICourse> = this.courseService.getCourse(this.course_id);
  moduleSelected$: Observable<IModule> =
    this.courseSessionService.moduleSelected$;

  ngOnInit(): void {
    this.courseDetailsInit();
  }

  courseDetailsInit() {
    this.courseSessionService.setModuleSelected(this.module_id);

    this.courseSessionService.courseSession$.subscribe((session) => {
      this.courseSessionSubject = session;
    });

    this.courseSessionService.moduleSelected$.subscribe((module) => {
      this.module_id = module.moduleId;
      this.finalPrice = Math.round(
        (module.price * (100 - module.percentage)) / 100
      );
    });

    this.authService.setAccessToCourse(this.course_id);
    this.authService.setAccessToModule(this.module_id);

    this.authService.accessToCourse$.subscribe((accessToCourse) => {
      this.userHasAccessToCourse = accessToCourse;
    });

    this.authService.accessToModule$.subscribe((accessToModule) => {
      this.userHasAccessToModule = accessToModule;
    });
  }
}
