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

  filterValue: string = '';
  coursesList: ISecondaryCourse[] = [];
  filteredCoursesList: ISecondaryCourse[] = [];

  paginatorCourseIds: number[] = [];
  paginatorPages: number = 4;
  pageSize: number = 6;
  currentPage: number = 0;

  secondaryCourseList$: Observable<ISecondaryCourse[]> =
    this.secondaryCourseService.getPaginatedSecCoursesList(this.pageSize, 0);

  ngOnInit(): void {
    this.secondaryCourseList$.subscribe((data) => {
      this.coursesList = data;

      this.resetFilteredCourses();
    });

    this.secondaryCourseService.getAllSecondaryCourses().subscribe((data) => {
      this.paginatorPages = Math.ceil(data.length / this.pageSize);
    });

    this.paginatorCourseIds.push(0);
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
  }

  private resetFilteredCourses(): void {
    this.filteredCoursesList = JSON.parse(JSON.stringify(this.coursesList));
  }

  filterByMode(value: string) {
    if (value !== 'all') {
      this.filteredCoursesList = this.coursesList.filter(
        (course) => course.mode === value
      );
    } else {
      this.resetFilteredCourses();
    }
  }

  paginateCourseList(nextPage: boolean) {
    if (nextPage && this.currentPage < this.paginatorPages - 1) {
      this.currentPage++;

      const lastCourseId =
        this.filteredCoursesList[this.filteredCoursesList.length - 1]
          .seccourseId;

      // Si existe el id en el array, no lo agrega
      if (!this.paginatorCourseIds.includes(lastCourseId)) {
        this.paginatorCourseIds.push(lastCourseId);
      }
    } else {
      this.currentPage--;
    }

    this.filteredCoursesList = [];

    this.secondaryCourseService
      .getPaginatedSecCoursesList(
        this.pageSize,
        this.paginatorCourseIds[this.currentPage]
      )
      .subscribe((data) => {
        this.filteredCoursesList = data;
      });
  }
}
