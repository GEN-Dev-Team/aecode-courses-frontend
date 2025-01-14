import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { CourseItemComponent } from '../course-item/course-item.component';
import { ISecondaryCourse } from '../interface/secondary-course/Secondary-Course';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseItemComponent, LoaderComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  @Input() listTitle: string = '';
  @Input() secondaryCourseList: ISecondaryCourse[] = [];

  constructor(private courseService: CourseService, private router: Router) {}
}
