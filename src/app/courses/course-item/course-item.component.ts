import { Component, inject, Input } from '@angular/core';
import { WatchIconComponent } from '../../shared/icons/watch-icon/watch-icon.component';
import { CourseSessionIconComponent } from '../../shared/icons/course-session-icon/course-session-icon.component';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { BrowserService } from '../../core/services/browser.service';
import { IStudyPlan } from '../interface/secondary-course/StudyPlan';
import { environment } from '../../../environment/environment';
import { IModule } from '../interface/Module';
import { IUnit } from '../interface/Unit';
import { CommonModule } from '@angular/common';
import { AddBaseUrlPipe } from '../../core/pipes/add-base-url.pipe';
import { BasicLevelIconComponent } from '../../shared/icons/basic-level-icon/basic-level-icon.component';
import { MediumLevelIconComponent } from '../../shared/icons/medium-level-icon/medium-level-icon.component';
import { HighLevelIconComponent } from '../../shared/icons/high-level-icon/high-level-icon.component';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [
    WatchIconComponent,
    CourseSessionIconComponent,
    CommonModule,
    AddBaseUrlPipe,
    BasicLevelIconComponent,
    MediumLevelIconComponent,
    HighLevelIconComponent,
  ],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
})
export class CourseItemComponent {
  @Input() isMasiveCourse: boolean = false;
  @Input() course: any = {};

  courseService: CourseService = inject(CourseService);
  browserService: BrowserService = inject(BrowserService);
  router: Router = inject(Router);

  secondaryCourseMainImgUrl = '';
  secondaryCourseSessions: number = 0;

  ngOnInit() {
    if (!this.isMasiveCourse) {
      this.secondaryCourseMainImgUrl =
        environment.base + this.course.principalimage;
      this.course.studyplans.forEach((studyplan: IStudyPlan) => {
        this.secondaryCourseSessions += studyplan.sessions.length;
      });
    } else {
      this.secondaryCourseMainImgUrl =
        environment.base + this.course.coverimage;
      this.course.modules.forEach((module: IModule) => {
        module.units.forEach((unit: IUnit) => {
          this.secondaryCourseSessions += unit.sessions.length;
        });
      });
    }
  }

  showCourseDetails(courseId: number) {
    this.browserService.navigateAndScroll(
      `courses/secondary-course-detail/${courseId}`,
      0
    );
  }

  showMasiveCourseDetails(courseId: number) {
    this.browserService.navigateAndScroll(
      `courses/masive-course-detail/${courseId}`,
      0
    );
  }
}
