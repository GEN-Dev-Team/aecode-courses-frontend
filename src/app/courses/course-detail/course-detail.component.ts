import { Component, inject, OnInit } from '@angular/core';
import { MainContainerComponent } from '../../shared/components/main-container/main-container.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CourseModuleComponent } from './course-module/course-module.component';
import { CourseService } from '../services/course.service';
import { ICourse } from '../interface/Course';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ContentBlockedComponent } from '../../shared/components/content-blocked/content-blocked.component';
import { HouseIconComponent } from '../icons/house-icon/house-icon.component';
import { CaretRightIconComponent } from '../icons/caret-right-icon/caret-right-icon.component';
import { CaretUpIconComponent } from '../../shared/icons/caret-up-icon/caret-up-icon.component';
import { NextIconComponent } from '../icons/next-icon/next-icon.component';
import { PrevIconComponent } from '../icons/prev-icon/prev-icon.component';
import { CaretDownIconComponent } from '../icons/caret-down-icon/caret-down-icon.component';
import { AuthService } from '../../core/services/auth.service';
import { NgClass, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { CourseSessionService } from '../services/course-session.service';
import { ISession } from '../interface/Session';
import { LinkIconComponent } from '../icons/link-icon/link-icon.component';
import { PdfIconComponent } from '../icons/pdf-icon/pdf-icon.component';
import { DownloadIconComponent } from '../icons/download-icon/download-icon.component';
import { WorldIconComponent } from '../icons/world-icon/world-icon.component';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    MainContainerComponent,
    ButtonComponent,
    CourseModuleComponent,
    ModalComponent,
    ContentBlockedComponent,
    HouseIconComponent,
    CaretRightIconComponent,
    CaretUpIconComponent,
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

  course_id: number = -1;
  course!: ICourse;
  courseSessionSubject!: ISession;
  showBlockedModal = false;
  isUserLogged: boolean = true;
  module_id = 0;
  isDescription = true;
  courseIntroVideo = '';

  ngOnInit(): void {
    this.authService.isLoggedIn$().subscribe((loggedInStatus) => {
      this.isUserLogged = loggedInStatus;
    });
    this.course_id = this.route.snapshot.params['id'];

    this.courseSession.courseSession$.subscribe((session) => {
      this.courseSessionSubject = session;
    });

    this.courseSession.module_id$.subscribe((id) => {
      this.module_id = id;
    });

    this.getCourse(this.course_id);
  }

  getCourse(id: number) {
    this.courseService.getCourse(id).subscribe((response) => {
      this.course = response;

      this.course.modules.sort((a, b) => a.orderNumber - b.orderNumber);
      this.course.modules.forEach((module) => {
        module.units.sort((a, b) => a.orderNumber - b.orderNumber);
      });

      this.courseIntroVideo = this.course.videoUrl;
    });
  }

  playCourseVideo() {
    this.courseIntroVideo = this.course.videoUrl;
  }
}
