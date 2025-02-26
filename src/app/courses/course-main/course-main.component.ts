import { Component, inject, NgZone, OnInit } from '@angular/core';
import { SearchToolIconComponent } from '../../shared/icons/search-tool-icon/search-tool-icon.component';
import { CourseSearchIconComponent } from '../../shared/icons/course-search-icon/course-search-icon.component';
import { PlatformCourseListComponent } from '../platform-course-list/platform-course-list.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { SecondaryCourseService } from '../services/secondary-course.service';
import { ISecondaryCourseSummary } from '../interface/secondary-course/Secondary-Course';
import { Observable } from 'rxjs';
import { BrowserService } from '../../core/services/browser.service';
import { IPaginator } from '../../core/interfaces/paginator';

@Component({
  selector: 'app-course-main',
  standalone: true,
  imports: [
    SearchToolIconComponent,
    CourseSearchIconComponent,
    PlatformCourseListComponent,
    CourseListComponent,
  ],
  templateUrl: './course-main.component.html',
  styleUrl: './course-main.component.css',
})
export class CourseMainComponent implements OnInit {
  secondaryCourseService: SecondaryCourseService = inject(
    SecondaryCourseService
  );

  browserService: BrowserService = inject(BrowserService);

  ngZone: NgZone = inject(NgZone);

  isFilteringByMode = false;
  filterValue: string = '';
  coursesList: ISecondaryCourseSummary[] = [];
  filteredCoursesList: ISecondaryCourseSummary[] = [];

  animate = false;
  animateFadeOut = false;
  intervalId: any = null;

  paginatorPages: number = 1;
  pageSize: number = 6;
  currentPage: number = 0;

  secondaryCourseList$: Observable<IPaginator<ISecondaryCourseSummary>> =
    this.secondaryCourseService.getPaginatedSecCoursesList(
      this.currentPage,
      this.pageSize
    );

  ngOnInit(): void {
    this.secondaryCourseList$.subscribe((data) => {
      this.coursesList = data.content;
      this.paginatorPages = data.totalPages;

      this.resetFilteredCourses();
    });

    this.startAnimationLoop();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
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
      this.filteredCoursesList = [];
      this.isFilteringByMode = true;
      this.currentPage = 0;
      this.filterValue = value;

      this.secondaryCourseService
        .getSecondaryCoursesByMode(
          this.filterValue,
          this.currentPage,
          this.pageSize
        )
        .subscribe((data) => {
          this.filteredCoursesList = data.content;
          this.paginatorPages = data.totalPages;
          console.log(data);
        });
    } else {
      this.isFilteringByMode = false;
      this.currentPage = 0;
      this.resetFilteredCourses();
    }
  }

  paginateCourseList(nextPage: boolean) {
    if (nextPage && this.currentPage < this.paginatorPages - 1) {
      this.currentPage++;
    } else {
      this.currentPage--;
    }

    this.filteredCoursesList = [];

    if (!this.isFilteringByMode) {
      this.secondaryCourseService
        .getPaginatedSecCoursesList(this.currentPage, this.pageSize)
        .subscribe((data) => {
          this.filteredCoursesList = data.content;
        });
    } else {
      this.secondaryCourseService
        .getSecondaryCoursesByMode(
          this.filterValue,
          this.currentPage,
          this.pageSize
        )
        .subscribe((data) => {
          this.filteredCoursesList = data.content;
        });
    }
  }

  setPaginatorPage(page: number) {
    this.currentPage = page;

    this.filteredCoursesList = [];

    if (!this.isFilteringByMode) {
      this.secondaryCourseService
        .getPaginatedSecCoursesList(this.currentPage, this.pageSize)
        .subscribe((data) => {
          this.filteredCoursesList = data.content;
        });
    } else {
      this.secondaryCourseService
        .getSecondaryCoursesByMode(
          this.filterValue,
          this.currentPage,
          this.pageSize
        )
        .subscribe((data) => {
          this.filteredCoursesList = data.content;
        });
    }
  }

  startAnimationLoop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.ngZone.runOutsideAngular(() => {
      this.animate = true;
      setTimeout(() => {
        this.ngZone.run(() => (this.animateFadeOut = true));
      }, 1500);

      // Repite la animación cada 5 segundos
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.animate = false;
          this.animateFadeOut = false;
        });

        setTimeout(() => {
          this.ngZone.run(() => (this.animate = true));
        }, 100);

        setTimeout(() => {
          this.ngZone.run(() => (this.animateFadeOut = true));
        }, 1500);
      }, 5000);
    });
  }
}
