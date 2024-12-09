import { Component, inject, Sanitizer } from '@angular/core';
import { SessionIconComponent } from '../../admin-panel/icons/session-icon/session-icon.component';
import { CourseSessionIconComponent } from '../../shared/icons/course-session-icon/course-session-icon.component';
import { CourseSessionComponent } from '../course-detail/course-session/course-session.component';
import { WatchIconComponent } from '../../shared/icons/watch-icon/watch-icon.component';
import { UnitIconComponent } from '../../admin-panel/icons/unit-icon/unit-icon.component';
import { CourseIconComponent } from '../../admin-panel/icons/course-icon/course-icon.component';
import { UnitCourseIconComponent } from '../../shared/icons/unit-course-icon/unit-course-icon.component';
import { CaretUpIconComponent } from '../../shared/icons/caret-up-icon/caret-up-icon.component';
import { CaretDownIconComponent } from '../../shared/icons/caret-down-icon/caret-down-icon.component';
import { CourseInvestComponent } from './course-invest/course-invest.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { YoutubePlayerComponent } from '../course-detail/youtube-player/youtube-player.component';
import { YoutubeService } from '../../core/services/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
    CaretDownIconComponent,
    CourseInvestComponent,
    ModalComponent,
    YoutubePlayerComponent,
  ],
  templateUrl: './course-landing-detail.component.html',
  styleUrl: './course-landing-detail.component.css',
})
export class CourseLandingDetailComponent {
  sanitizer: DomSanitizer = inject(DomSanitizer);

  showDropdownUnit: boolean = false;
  showIntroVideo: boolean = false;
  youtubeVideo: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/NmkY4JgS21A'
  );

  openUnit(id: number) {
    this.showDropdownUnit = !this.showDropdownUnit;
  }
}
