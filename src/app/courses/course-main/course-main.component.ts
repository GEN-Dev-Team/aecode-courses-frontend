import { Component, inject, OnInit } from '@angular/core';
import { SearchToolIconComponent } from '../../shared/icons/search-tool-icon/search-tool-icon.component';
import { CourseSearchIconComponent } from '../../shared/icons/course-search-icon/course-search-icon.component';
import { PlatformCourseListComponent } from '../platform-course-list/platform-course-list.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { SecondaryCourseService } from '../services/secondary-course.service';
import { ISecondaryCourse } from '../interface/secondary-course/Secondary-Course';
import { Observable } from 'rxjs';
import { FadeOutDirective } from '../../shared/directives/animations/fade-out.directive';

@Component({
  selector: 'app-course-main',
  standalone: true,
  imports: [
    SearchToolIconComponent,
    CourseSearchIconComponent,
    PlatformCourseListComponent,
    CourseListComponent,
    FadeOutDirective,
  ],
  templateUrl: './course-main.component.html',
  styleUrl: './course-main.component.css',
})
export class CourseMainComponent implements OnInit {
  secondaryCourseService: SecondaryCourseService = inject(
    SecondaryCourseService
  );

  coursesList: ISecondaryCourse[] = [];

  filteredCoursesList: ISecondaryCourse[] = [];

  secondaryCourseList$: Observable<ISecondaryCourse[]> =
    this.secondaryCourseService.getAllSecondaryCourses();

  ngOnInit(): void {
    this.secondaryCourseList$.subscribe((data) => {
      this.coursesList = data;

      this.resetFilteredCourses();
    });
  }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();

    if (!searchTerm) {
      this.resetFilteredCourses();
      return;
    }

    this.filteredCoursesList = this.coursesList.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(this.filteredCoursesList);
  }

  private resetFilteredCourses(): void {
    this.filteredCoursesList = JSON.parse(JSON.stringify(this.coursesList));
  }
}
