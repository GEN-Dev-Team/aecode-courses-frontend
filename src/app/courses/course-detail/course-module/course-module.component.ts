import { Component, inject, Input } from '@angular/core';
import { CaretUpIconComponent } from '../../../shared/icons/caret-up-icon/caret-up-icon.component';
import { CaretDownIconComponent } from '../../../shared/icons/caret-down-icon/caret-down-icon.component';
import { PadlockIconComponent } from '../../../shared/icons/padlock-icon/padlock-icon.component';
import { NgClass, NgIf } from '@angular/common';
import { IModule } from '../../interface/Module';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { TestComponent } from '../test/test.component';
import { CourseUnitComponent } from '../course-unit/course-unit.component';
import { AuthService } from '../../../core/services/auth.service';
import { ICourse } from '../../interface/Course';
import { ActivatedRoute } from '@angular/router';
import { ISession } from '../../interface/Session';
import { CourseSessionService } from '../../services/course-session.service';
import { InputCheckIconComponent } from '../../icons/input-check-icon/input-check-icon.component';
import { ProgressSessionService } from '../../services/course-progress.service';

@Component({
  selector: 'app-course-module',
  standalone: true,
  imports: [
    CaretUpIconComponent,
    CaretDownIconComponent,
    PadlockIconComponent,
    NgClass,
    ModalComponent,
    TestComponent,
    CourseUnitComponent,
    NgIf,
    InputCheckIconComponent,
  ],
  templateUrl: './course-module.component.html',
  styleUrl: './course-module.component.css',
})
export class CourseModuleComponent {
  @Input() module!: IModule;

  authService: AuthService = inject(AuthService);
  route: ActivatedRoute = inject(ActivatedRoute);
  courseSessionService: CourseSessionService = inject(CourseSessionService);
  courseProgressService: ProgressSessionService = inject(
    ProgressSessionService
  );

  safeUrl!: SafeResourceUrl;
  showItems = false;
  showEvaluation = false;
  usserAccess: boolean = false;
  course_id: number = this.route.snapshot.params['id'];
  sessionObject!: ISession;
  testCompleted: boolean = false;
  isUserLogged: boolean = false;

  ngOnInit(): void {
    this.authService.isLoggedIn$().subscribe((isLogged) => {
      this.isUserLogged = isLogged;
    });

    if (this.isUserLogged) {
      this.authService
        .getUserDetails()
        .usercourseaccess.forEach((course: ICourse) => {
          if (course.courseId === Number(this.course_id)) {
            this.usserAccess = true;
          }
        });
      this.checkModuleTestStatus();
    }
  }

  evaluation() {
    this.showEvaluation = !this.showEvaluation;
  }

  onClick() {
    if (this.usserAccess) {
      this.showItems = !this.showItems;

      this.sessionObject = {
        sessionId: 0,
        unitId: 0,
        title: this.module.title,
        videoUrl: this.module.videoUrl,
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
      this.courseSessionService.setModuleId(this.module.moduleId - 1);
    }
  }

  checkModuleTestStatus() {
    if (this.courseProgressService.checkRWProgress(this.module)) {
      this.testCompleted = true;
    }
  }
}
