import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { CourseItemComponent } from '../course-item/course-item.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseItemComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  @Input() listTitle: string = '';

  constructor(private courseService: CourseService, private router: Router) {}

  getCourses() {
    this.courseService.getCourses().subscribe((response) => {
      console.log(response);
    });
  }
}
