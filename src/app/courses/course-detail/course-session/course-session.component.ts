import { Component, inject, Input } from '@angular/core';
import { PadlockIconComponent } from '../../../shared/icons/padlock-icon/padlock-icon.component';
import { CaretDownIconComponent } from '../../../shared/icons/caret-down-icon/caret-down-icon.component';
import { CaretUpIconComponent } from '../../../shared/icons/caret-up-icon/caret-up-icon.component';
import { ISession } from '../../interface/Session';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CourseSessionService } from '../../services/course-session.service';
import { AuthService } from '../../../core/services/auth.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ContentBlockedComponent } from '../../../shared/components/content-blocked/content-blocked.component';
import { NgClass } from '@angular/common';
import { ProgressSessionService } from '../../services/progress-session.service';
import { IProgressSession } from '../../interface/ProgressSession';
import { ILogin } from '../../../home/interface/Login';
import { UserService } from '../../../home/user.service';
import { InputCheckIconComponent } from '../../icons/input-check-icon/input-check-icon.component';

@Component({
  selector: 'app-course-session',
  standalone: true,
  imports: [
    PadlockIconComponent,
    CaretDownIconComponent,
    CaretUpIconComponent,
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

  courseSessionService: CourseSessionService = inject(CourseSessionService);
  authService: AuthService = inject(AuthService);
  userService: UserService = inject(UserService);
  progressSessionService: ProgressSessionService = inject(
    ProgressSessionService
  );
  userId = JSON.parse(localStorage.getItem('user') || '{}').userId;

  youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
  safeUrl!: SafeResourceUrl;
  sanitizer: DomSanitizer = inject(DomSanitizer);
  courseSessionSelected!: ISession;
  userDetails!: ILogin;
  videoDuration = 0;
  isUserLogged: boolean = false;
  showBlockedModal: boolean = false;
  selectedVideoIsCompleted: boolean = false;
  sessionProgress: IProgressSession = {
    progressId: -1,
    userId: -1,
    sessionId: -1,
    completed: false,
  };

  ngOnInit(): void {
    this.authService.isLoggedIn$().subscribe((loggedInStatus) => {
      this.isUserLogged = loggedInStatus;
      this.userService.getUser(this.userId).subscribe((response) => {
        this.userDetails = response;

        this.userDetails.userprogresssessions?.forEach((progressSession) => {
          if (progressSession.sessionId == this.courseSession.sessionId) {
            this.selectedVideoIsCompleted = progressSession.completed;
          }
        });
      });
    });

    this.courseSessionService.courseSession$.subscribe((session) => {
      this.courseSessionSelected = session;
    });
  }

  selectUnitVideo(url: string) {
    if (this.youtubeRegex.test(url) && this.isUserLogged) {
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
