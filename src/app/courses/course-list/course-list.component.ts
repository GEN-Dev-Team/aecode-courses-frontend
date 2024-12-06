import { Component, EventEmitter, Output } from '@angular/core';
import { SquareIconComponent } from '../../shared/icons/square-icon/square-icon.component';
import { Router, RouterLink } from '@angular/router';
import { SeparatorIconComponent } from '../../shared/icons/separator-icon/separator-icon.component';
import { CourseService } from '../services/course.service';
import { ZoomInDirective } from '../../shared/directives/animations/zoom-in.directive';
import { CourseItemComponent } from '../course-item/course-item.component';
import { CourseAsideComponent } from '../course-aside/course-aside.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    SquareIconComponent,
    SeparatorIconComponent,
    ZoomInDirective,
    CourseItemComponent,
    CourseAsideComponent,
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  constructor(private courseService: CourseService, private router: Router) {}

  getCourses() {
    this.courseService.getCourses().subscribe((response) => {
      console.log(response);
    });
  }
}
