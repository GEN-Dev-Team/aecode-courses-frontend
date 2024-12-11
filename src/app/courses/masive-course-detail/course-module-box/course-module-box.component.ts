import { Component } from '@angular/core';
import { CourseSessionIconComponent } from '../../../shared/icons/course-session-icon/course-session-icon.component';
import { WatchIconComponent } from '../../../shared/icons/watch-icon/watch-icon.component';

@Component({
  selector: 'app-course-module-box',
  standalone: true,
  imports: [CourseSessionIconComponent, WatchIconComponent],
  templateUrl: './course-module-box.component.html',
  styleUrl: './course-module-box.component.css',
})
export class CourseModuleBoxComponent {}
