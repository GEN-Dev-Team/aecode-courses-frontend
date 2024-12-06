import { Component } from '@angular/core';
import { SessionIconComponent } from '../../admin-panel/icons/session-icon/session-icon.component';
import { CourseSessionIconComponent } from '../../shared/icons/course-session-icon/course-session-icon.component';
import { CourseSessionComponent } from '../course-detail/course-session/course-session.component';
import { WatchIconComponent } from '../../shared/icons/watch-icon/watch-icon.component';
import { UnitIconComponent } from '../../admin-panel/icons/unit-icon/unit-icon.component';
import { CourseIconComponent } from '../../admin-panel/icons/course-icon/course-icon.component';
import { UnitCourseIconComponent } from '../../shared/icons/unit-course-icon/unit-course-icon.component';
import { CaretUpIconComponent } from '../../shared/icons/caret-up-icon/caret-up-icon.component';

@Component({
  selector: 'app-course-landing-detail',
  standalone: true,
  imports: [
    SessionIconComponent,
    CourseSessionIconComponent,
    CourseSessionComponent,
    WatchIconComponent,
    UnitIconComponent,
    CourseIconComponent,
    UnitCourseIconComponent,
    CaretUpIconComponent,
  ],
  templateUrl: './course-landing-detail.component.html',
  styleUrl: './course-landing-detail.component.css',
})
export class CourseLandingDetailComponent {}
