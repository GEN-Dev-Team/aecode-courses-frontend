import { Component, inject } from '@angular/core';
import { BookIconComponent } from '../../courses/icons/book-icon/book-icon.component';
import { SyncCourseIconComponent } from '../../shared/icons/sync-course-icon/sync-course-icon.component';
import { AecodeIconComponent } from '../icons/aecode-icon/aecode-icon.component';
import { ZoomInDirective } from '../../shared/directives/animations/zoom-in.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [
    BookIconComponent,
    SyncCourseIconComponent,
    AecodeIconComponent,
    ZoomInDirective,
  ],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css',
})
export class HomeHeaderComponent {
  route: Router = inject(Router);

  redirectToCoursesView() {
    this.route.navigate(['/courses']);
  }
}
