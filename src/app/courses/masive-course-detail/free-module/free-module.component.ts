import { Component, inject, Input } from '@angular/core';
import { CourseSessionIconComponent } from '../../../shared/icons/course-session-icon/course-session-icon.component';
import { WatchIconComponent } from '../../../shared/icons/watch-icon/watch-icon.component';
import { CourseService } from '../../services/course.service';
import { BrowserService } from '../../../core/services/browser.service';
import { environment } from '../../../../environment/environment';
import { ICourse } from '../../interface/Course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-free-module',
  standalone: true,
  imports: [CourseSessionIconComponent, WatchIconComponent, CommonModule],
  templateUrl: './free-module.component.html',
  styleUrl: './free-module.component.css',
})
export class FreeModuleComponent {
  @Input() course!: ICourse;

  browserService: BrowserService = inject(BrowserService);
  courseService: CourseService = inject(CourseService);

  base_url = environment.base;
  finalPrice = 0;

  ngOnInit(): void {
    this.finalPrice = Math.round(
      (this.course.price * (100 - this.course.percentage)) / 100
    );
  }
}
