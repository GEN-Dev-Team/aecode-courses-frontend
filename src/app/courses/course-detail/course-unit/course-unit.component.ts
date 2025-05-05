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
import { IModule } from '../../interface/Module';

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
  isUserLogged: boolean = false;
  showSessions: boolean = true;
  sessionObject!: ISession;
  userHasAccessToModule: boolean = false;
  course_id: number = this.route.snapshot.params['courseId'];
  module_id: number = this.route.snapshot.params['moduleId'];
  blockedMessage: string =
    'Para acceder al contenido completo del curso, es necesario que te suscribas previamente.';
  moduleSelected!: IModule;

  ngOnInit(): void {
    this.authService.isLoggedIn$().subscribe((isLogged) => {
      this.isUserLogged = isLogged;
    });
    this.courseSessionService.courseSession$.subscribe((session) => {
      this.sessionObject = session;
    });

    this.courseSessionService.moduleSelected$.subscribe((module) => {
      this.moduleSelected = module;
    });

    this.authService.accessToModule$.subscribe((accessToModule) => {
      this.userHasAccessToModule = accessToModule;
    });
  }

  onClick() {
    if (this.moduleSelected.orderNumber == 0 || this.userHasAccessToModule) {
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
    } else {
      this.showBlockedModal = true;
    }
  }
}
