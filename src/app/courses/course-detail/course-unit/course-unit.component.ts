import { Component, inject, Input } from '@angular/core';
import { IUnit } from '../../interface/Unit';
import { CaretUpIconComponent } from '../../../shared/icons/caret-up-icon/caret-up-icon.component';
import { CaretDownIconComponent } from '../../../shared/icons/caret-down-icon/caret-down-icon.component';
import { PadlockIconComponent } from '../../../shared/icons/padlock-icon/padlock-icon.component';
import { AuthService } from '../../../core/services/auth.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ContentBlockedComponent } from '../../../shared/components/content-blocked/content-blocked.component';
import { CourseSessionComponent } from '../course-session/course-session.component';
import { CourseSessionService } from '../../services/course-session.service';
import { ISession } from '../../interface/Session';
import { InputCheckIconComponent } from '../../icons/input-check-icon/input-check-icon.component';
import { NgClass } from '@angular/common';
import { ICourse } from '../../interface/Course';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-unit',
  standalone: true,
  imports: [
    CaretUpIconComponent,
    CaretDownIconComponent,
    PadlockIconComponent,
    ModalComponent,
    ContentBlockedComponent,
    CourseSessionComponent,
    InputCheckIconComponent,
    NgClass,
  ],
  templateUrl: './course-unit.component.html',
  styleUrl: './course-unit.component.css',
})
export class CourseUnitComponent {
  @Input() unit!: IUnit;

  authService = inject(AuthService);
  route: ActivatedRoute = inject(ActivatedRoute);
  courseSessionService = inject(CourseSessionService);

  showBlockedModal = false;
  isUserLogged: boolean = true;
  showSessions: boolean = true;
  sessionObject!: ISession;
  usserAccess: boolean = true;
  course_id: number = this.route.snapshot.params['id'];

  ngOnInit(): void {
    // this.authService.isLoggedIn$().subscribe((isLogged) => {
    //   this.isUserLogged = isLogged;
    // });
    // this.courseSessionService.courseSession$.subscribe((session) => {
    //   this.sessionObject = session;
    // });
    // if (this.isUserLogged) {
    //   this.authService
    //     .getUserDetails()
    //     .usercourseaccess.forEach((course: ICourse) => {
    //       if (course.courseId === Number(this.course_id)) {
    //         this.usserAccess = true;
    //       }
    //     });
    // }
  }

  onClick() {
    // if (this.usserAccess) {
    this.showSessions = !this.showSessions;

    this.sessionObject = {
      sessionId: 0,
      unitId: 0,
      title: this.unit.title,
      videoUrl: this.unit.videoUrl,
      description: '',
      resourceText: '',
      resourceDocument: '',
      orderNumber: 0,
      taskName: '',
      taskUrl: '',
      htmlContent: '',
      sessiontests: [],
    };
    this.courseSessionService.setCourseSessionDetails(this.sessionObject);
    // this.courseSessionService.setModuleSelected(this.unit.moduleId - 1);
    // }
  }
}
