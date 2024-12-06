import { Component, inject, Input } from '@angular/core';
import { LevelIconComponent } from '../../shared/icons/level-icon/level-icon.component';
import { WatchIconComponent } from '../../shared/icons/watch-icon/watch-icon.component';
import { CourseSessionIconComponent } from '../../shared/icons/course-session-icon/course-session-icon.component';
import { GiftIconComponent } from '../../shared/icons/gift-icon/gift-icon.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [
    LevelIconComponent,
    WatchIconComponent,
    CourseSessionIconComponent,
    GiftIconComponent,
  ],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
})
export class CourseItemComponent {
  @Input() isPlatformCourse: boolean = false;

  router: Router = inject(Router);
}
