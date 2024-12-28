import { Component, inject, Input } from '@angular/core';
import { PadlockIconComponent } from '../../../shared/icons/padlock-icon/padlock-icon.component';
import { ISession } from '../../interface/Session';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CourseSessionService } from '../../services/course-session.service';
import { AuthService } from '../../../core/services/auth.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ContentBlockedComponent } from '../../../shared/components/content-blocked/content-blocked.component';
import { NgClass } from '@angular/common';
import { ProgressSessionService } from '../../services/course-progress.service';
import { IProgressSession } from '../../interface/CourseProgress';
import { ILogin } from '../../../home/interface/Login';
import { UserService } from '../../../home/user.service';
import { InputCheckIconComponent } from '../../icons/input-check-icon/input-check-icon.component';
import { ActivatedRoute } from '@angular/router';
import { IModule } from '../../interface/Module';
import { ICourse } from '../../interface/Course';

@Component({
  selector: 'app-course-session',
  standalone: true,
  imports: [
    PadlockIconComponent,
    ModalComponent,
    ContentBlockedComponent,
    NgClass,
    InputCheckIconComponent,
  ],
  templateUrl: './course-session.component.html',
  styleUrl: './course-session.component.css',
})
export class CourseSessionComponent {
  @Input() courseSession!: ISession;
  @Input() moduleId!: number;

  courseSessionService: CourseSessionService = inject(CourseSessionService);
  authService: AuthService = inject(AuthService);
  userService: UserService = inject(UserService);
  route: ActivatedRoute = inject(ActivatedRoute);
  progressSessionService: ProgressSessionService = inject(
    ProgressSessionService
  );
  userId = 0;

  youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
  safeUrl!: SafeResourceUrl;
  course_id: number = this.route.snapshot.params['courseId'];
  sanitizer: DomSanitizer = inject(DomSanitizer);
  courseSessionSelected!: ISession;
  userDetails!: ILogin;
  videoDuration = 0;
  isUserLogged: boolean = false;
  showBlockedModal: boolean = false;
  userHasAccess: boolean = false;
  userHasAccessToModule: boolean = false;
  selectedVideoIsCompleted: boolean = false;
  sessionProgress: IProgressSession = {
    progressId: -1,
    userId: -1,
    sessionId: -1,
    completed: false,
  };
  module_id: number = 0;
  blockedMessage: string =
    'Para acceder al contenido completo del curso, es necesario que te suscribas previamente.';
  moduleSelected!: IModule;

  ngOnInit(): void {
    this.userId = this.authService.getUserDetails().userId;

    this.authService.isLoggedIn$().subscribe((loggedInStatus) => {
      this.isUserLogged = loggedInStatus;

      if (this.isUserLogged) {
        this.userService.getUser(this.userId).subscribe((response) => {
          this.userDetails = response;

          this.userDetails.userprogresssessions?.forEach((progressSession) => {
            if (progressSession.sessionId == this.courseSession.sessionId) {
              this.selectedVideoIsCompleted = progressSession.completed;
            }
          });
        });
      }
    });

    this.courseSessionService.courseSession$.subscribe((session) => {
      this.courseSessionSelected = session;
    });

    this.courseSessionService.moduleSelected$.subscribe((module) => {
      this.moduleSelected = module;
    });

    if (this.isUserLogged) {
      this.authService
        .getUserDetails()
        .usercourseaccess.forEach((course: ICourse) => {
          if (course.courseId === Number(this.course_id)) {
            this.userHasAccess = true;
          }
        });

      this.userHasAccessToModule = this.authService.hasAccesToModule(
        this.moduleSelected.moduleId
      );
    }
  }

  selectUnitVideo(url: string) {
    if (
      (this.youtubeRegex.test(url) && this.userHasAccess) ||
      this.moduleSelected.orderNumber == 0 ||
      this.userHasAccessToModule
    ) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      this.courseSessionSelected = this.courseSession;
      this.courseSessionService.setCourseSessionDetails(
        this.courseSessionSelected
      );
    } else {
      this.showBlockedModal = true;
    }
  }
}
