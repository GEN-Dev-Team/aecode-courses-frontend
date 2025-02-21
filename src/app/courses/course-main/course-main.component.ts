import { Component, inject, NgZone, OnInit } from '@angular/core';
import { SearchToolIconComponent } from '../../shared/icons/search-tool-icon/search-tool-icon.component';
import { CourseSearchIconComponent } from '../../shared/icons/course-search-icon/course-search-icon.component';
import { PlatformCourseListComponent } from '../platform-course-list/platform-course-list.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { SecondaryCourseService } from '../services/secondary-course.service';
import { ISecondaryCourse } from '../interface/secondary-course/Secondary-Course';
import { Observable } from 'rxjs';
import { BrowserService } from '../../core/services/browser.service';

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

  filterValue: string = '';
  coursesList: ISecondaryCourse[] = [];
  filteredCoursesList: ISecondaryCourse[] = [];

  animate = false;
  animateFadeOut = false;
  intervalId: any = null;

  paginatorPages: number = 1;
  pageSize: number = 6;
  currentPage: number = 0;
  offset: number = 0;
  showPaginator: boolean = true;

  secondaryCourseList$: Observable<ISecondaryCourse[]> =
    this.secondaryCourseService.getPaginatedSecCoursesList(
      this.pageSize,
      this.offset
    );

  ngOnInit(): void {
    this.secondaryCourseList$.subscribe((data) => {
      this.coursesList = data;

      this.resetFilteredCourses();
    });

    this.secondaryCourseService.getAllSecondaryCourses().subscribe((data) => {
      this.paginatorPages = Math.ceil(data.length / this.pageSize);
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
      this.showPaginator = false;
      this.filteredCoursesList = [];

      this.secondaryCourseService
        .getSecondaryCoursesByMode(value)
        .subscribe((data) => {
          this.filteredCoursesList = data;
        });
    } else {
      this.resetFilteredCourses();
      this.showPaginator = true;
    }

    this.currentPage = 0;
    this.offset = 0;
  }

  paginateCourseList(nextPage: boolean) {
    if (nextPage && this.currentPage < this.paginatorPages - 1) {
      this.currentPage++;
    } else {
      this.currentPage--;
    }

    this.offset = this.pageSize * this.currentPage;

    this.filteredCoursesList = [];

    this.secondaryCourseService
      .getPaginatedSecCoursesList(this.pageSize, this.offset)
      .subscribe((data) => {
        this.filteredCoursesList = data;
      });
  }

  setPaginatorPage(page: number) {
    this.currentPage = page;

    this.offset = this.pageSize * this.currentPage;

    this.filteredCoursesList = [];

    this.secondaryCourseService
      .getPaginatedSecCoursesList(this.pageSize, this.offset)
      .subscribe((data) => {
        this.filteredCoursesList = data;
      });
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
