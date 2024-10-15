import { Component, EventEmitter, Output } from '@angular/core';
import { SquareIconComponent } from '../../shared/icons/square-icon/square-icon.component';
import { Router, RouterLink } from '@angular/router';
import { SeparatorIconComponent } from '../../shared/icons/separator-icon/separator-icon.component';
import { CourseService } from '../course.service';
import { ZoomInDirective } from '../../shared/directives/animations/zoom-in.directive';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    SquareIconComponent,
    RouterLink,
    SeparatorIconComponent,
    ZoomInDirective,
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  @Output() openModal = new EventEmitter<boolean>();

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

  closeModal() {
    this.openModal.emit(false);
  }
}
