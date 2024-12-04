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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.getCourses();
  }

  goToCourse(id: number) {
    this.router.navigate(['/course-detail', id]);
  }

  getCourses() {
    this.courseService.getCourses().subscribe((response) => {
      console.log(response);
    });
  }
}
