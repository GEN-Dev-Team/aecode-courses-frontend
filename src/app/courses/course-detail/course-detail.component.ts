import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CourseModuleComponent } from './course-module/course-module.component';
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
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { CourseSessionService } from '../services/course-session.service';
import { ISession } from '../interface/Session';
import { LinkIconComponent } from '../icons/link-icon/link-icon.component';
import { PdfIconComponent } from '../icons/pdf-icon/pdf-icon.component';
import { DownloadIconComponent } from '../icons/download-icon/download-icon.component';
import { WorldIconComponent } from '../icons/world-icon/world-icon.component';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';
import { CourseOverlayComponent } from '../../shared/layouts/course-overlay/course-overlay.component';
import { CourseModuleBoxComponent } from '../masive-course-detail/course-module-box/course-module-box.component';
import { CourseUnitComponent } from './course-unit/course-unit.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    ButtonComponent,
    ModalComponent,
    ContentBlockedComponent,
    HouseIconComponent,
    CaretRightIconComponent,
    CaretDownIconComponent,
    NextIconComponent,
    PrevIconComponent,
    NgIf,
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
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css',
})
export class CourseDetailComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  courseService: CourseService = inject(CourseService);
  authService: AuthService = inject(AuthService);
  courseSession: CourseSessionService = inject(CourseSessionService);

  apiUrl = environment.base;

  course_id: number = Number(this.route.snapshot.params['id']);
  course$: Observable<ICourse> = this.courseService.getCourse(this.course_id);
  courseSessionSubject!: ISession;
  showBlockedModal = false;
  isUserLogged: boolean = true;
  module_id = 0;
  isDescription = true;
  courseIntroVideo = '';

  ngOnInit(): void {
    console.log('Renderizado de course-detail');
    this.authService.isLoggedIn$().subscribe((loggedInStatus) => {
      this.isUserLogged = loggedInStatus;
    });

    this.courseSession.courseSession$.subscribe((session) => {
      this.courseSessionSubject = session;
    });

    this.courseSession.module_id$.subscribe((id) => {
      this.module_id = id;
    });

    this.courseService.getCourse(this.course_id).subscribe((response) => {
      this.courseIntroVideo = response.videoUrl;
    });
  }
}
