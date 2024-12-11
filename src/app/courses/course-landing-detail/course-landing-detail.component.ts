import { Component, inject } from '@angular/core';
import { CourseSessionIconComponent } from '../../shared/icons/course-session-icon/course-session-icon.component';
import { WatchIconComponent } from '../../shared/icons/watch-icon/watch-icon.component';
import { UnitCourseIconComponent } from '../../shared/icons/unit-course-icon/unit-course-icon.component';
import { CaretUpIconComponent } from '../../shared/icons/caret-up-icon/caret-up-icon.component';
import { CaretDownIconComponent } from '../../shared/icons/caret-down-icon/caret-down-icon.component';
import { CourseInvestComponent } from './course-invest/course-invest.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-course-landing-detail',
  standalone: true,
  imports: [
    CourseSessionIconComponent,
    WatchIconComponent,
    UnitCourseIconComponent,
    CaretUpIconComponent,
    CaretDownIconComponent,
    CourseInvestComponent,
    ModalComponent,
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
