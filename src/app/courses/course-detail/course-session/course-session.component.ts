import { Component, inject, Input } from '@angular/core';
import { PadlockIconComponent } from '../../../shared/icons/padlock-icon/padlock-icon.component';
import { CaretDownIconComponent } from '../../../shared/icons/caret-down-icon/caret-down-icon.component';
import { CaretUpIconComponent } from '../../../shared/icons/caret-up-icon/caret-up-icon.component';
import { ISession } from '../../interface/Session';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CourseSessionService } from '../../services/course-session.service';

@Component({
  selector: 'app-course-session',
  standalone: true,
  imports: [PadlockIconComponent, CaretDownIconComponent, CaretUpIconComponent],
  templateUrl: './course-session.component.html',
  styleUrl: './course-session.component.css',
})
export class CourseSessionComponent {
  @Input() courseSession!: ISession;

  courseSessionService: CourseSessionService = inject(CourseSessionService);

  youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
  safeUrl!: SafeResourceUrl;
  sanitizer: DomSanitizer = inject(DomSanitizer);
  courseSessionSelected!: ISession;
  videoDuration = 0;

  ngOnInit(): void {
    this.courseSessionService.courseSession$.subscribe((session) => {
      this.courseSessionSelected = session;
    });
  }

  selectUnitVideo(url: string) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.courseSessionSelected = this.courseSession;
    this.courseSessionService.setCourseSessionDetails(
      this.courseSessionSelected
    );
  }
}
