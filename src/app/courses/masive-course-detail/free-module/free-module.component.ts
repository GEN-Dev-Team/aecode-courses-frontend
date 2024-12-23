import { Component, inject, Input } from '@angular/core';
import { CourseSessionIconComponent } from '../../../shared/icons/course-session-icon/course-session-icon.component';
import { WatchIconComponent } from '../../../shared/icons/watch-icon/watch-icon.component';
import { CourseService } from '../../services/course.service';
import { BrowserService } from '../../../core/services/browser.service';
import { IModule } from '../../interface/Module';
import { ITool } from '../../interface/secondary-course/Tool';
import { environment } from '../../../../environment/environment';
import { ICourse } from '../../interface/Course';

@Component({
  selector: 'app-free-module',
  standalone: true,
  imports: [CourseSessionIconComponent, WatchIconComponent],
  templateUrl: './free-module.component.html',
  styleUrl: './free-module.component.css',
})
export class FreeModuleComponent {
  @Input() course!: ICourse;

  browserService: BrowserService = inject(BrowserService);
  courseService: CourseService = inject(CourseService);

  base_url = environment.base;
}
