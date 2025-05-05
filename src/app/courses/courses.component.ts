<<<<<<< HEAD
import { Component, inject, NgZone } from '@angular/core';
import { CourseOverlayComponent } from '../shared/layouts/course-overlay/course-overlay.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IPaginator } from '../core/interfaces/paginator';
import { BrowserService } from '../core/services/browser.service';
import { ThemeService } from '../core/services/theme.service';
import { CourseSearchIconComponent } from '../shared/icons/course-search-icon/course-search-icon.component';
import { SearchToolIconComponent } from '../shared/icons/search-tool-icon/search-tool-icon.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseTagListComponent } from './components/course-tag-list/course-tag-list.component';
import { PlatformCourseListComponent } from './components/platform-course-list/platform-course-list.component';
import { ICourseTag } from './interface/CourseTag';
import { ISecondaryCourseSummary } from './interface/secondary-course/Secondary-Course';
import { CourseTagService } from './services/course-tag.service';
import { SecondaryCourseService } from './services/secondary-course.service';
=======
import { Component } from '@angular/core';
import { CourseMainComponent } from './course-main/course-main.component';
import { CourseOverlayComponent } from '../shared/layouts/course-overlay/course-overlay.component';
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74

@Component({
  selector: 'app-courses',
  standalone: true,
<<<<<<< HEAD
  imports: [
    CourseOverlayComponent,
    SearchToolIconComponent,
    CourseSearchIconComponent,
    CourseListComponent,
    AsyncPipe,
    CourseTagListComponent,
    PlatformCourseListComponent,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  secondaryCourseService: SecondaryCourseService = inject(
    SecondaryCourseService
  );
  courseTagService: CourseTagService = inject(CourseTagService);

  browserService: BrowserService = inject(BrowserService);
  ngZone: NgZone = inject(NgZone);
  themeService: ThemeService = inject(ThemeService);

  isFilteringByMode = false;
  filterValue: string = '';
  coursesList: ISecondaryCourseSummary[] = [];
  filteredCoursesList: ISecondaryCourseSummary[] = [];
  tagListFiltered: ICourseTag[] = [];
  tagList: ICourseTag[] = [];
  tagIdSelectedList: number[] = [];

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

    this.courseTagService.getCourseTags().subscribe((tags) => {
      this.tagList = tags;
      this.tagListFiltered = tags;
    });
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
      this.tagList = this.tagListFiltered;
      return;
    }

    this.tagList = this.tagList.filter((tag) =>
      tag.courseTagName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  private resetFilteredCourses(): void {
    this.filteredCoursesList = JSON.parse(JSON.stringify(this.coursesList));
    this.isFilteringByMode = false;
    this.filterValue = '';
  }

  filterByMode(value: string) {
    this.currentPage = 0;

    this.filteredCoursesList = [];
    this.isFilteringByMode = true;
    this.filterValue = value;

    switch (value) {
      case 'all':
        this.isFilteringByMode = false;
        this.resetFilteredCourses();
        this.currentPage = 0;
        break;
      case 'DATE':
        this.secondaryCourseService
          .getSecondaryCoursesByDate(this.currentPage, this.pageSize)
          .subscribe((data) => {
            this.filteredCoursesList = data.content;
            this.paginatorPages = data.totalPages;
          });
        break;
      default:
        this.secondaryCourseService
          .getSecondaryCoursesByMode(
            this.filterValue,
            this.currentPage,
            this.pageSize
          )
          .subscribe((data) => {
            this.filteredCoursesList = data.content;
            this.paginatorPages = data.totalPages;
          });
        break;
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
        .getSecondaryCoursesByDate(this.currentPage, this.pageSize)
        .subscribe((data) => {
          this.filteredCoursesList = data.content;
          this.paginatorPages = data.totalPages;
        });
    } else if (this.filterValue === 'DATE') {
      this.secondaryCourseService
        .getSecondaryCoursesByDate(this.currentPage, this.pageSize)
        .subscribe((data) => {
          this.filteredCoursesList = data.content;
          this.paginatorPages = data.totalPages;
        });
    } else if (this.filterValue === 'TAG') {
      this.secondaryCourseService
        .getSecondaryCoursesByTags(
          this.tagIdSelectedList,
          this.currentPage,
          this.pageSize
        )
        .subscribe((data) => {
          this.filteredCoursesList = data.content;
          this.paginatorPages = data.totalPages;
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
    } else if (this.filterValue === 'DATE') {
      this.secondaryCourseService
        .getSecondaryCoursesByDate(this.currentPage, this.pageSize)
        .subscribe((data) => {
          this.filteredCoursesList = data.content;
          this.paginatorPages = data.totalPages;
        });
    } else if (this.filterValue === 'TAG') {
      this.secondaryCourseService
        .getSecondaryCoursesByTags(
          this.tagIdSelectedList,
          this.currentPage,
          this.pageSize
        )
        .subscribe((data) => {
          this.filteredCoursesList = data.content;
          this.paginatorPages = data.totalPages;
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

  handleTagListChange(tagIdsList: number[]) {
    this.currentPage = 0;
    this.tagIdSelectedList = tagIdsList;

    if (tagIdsList.length > 0) {
      this.filteredCoursesList = [];
      this.isFilteringByMode = true;
      this.filterValue = 'TAG';

      this.secondaryCourseService
        .getSecondaryCoursesByTags(tagIdsList, this.currentPage, this.pageSize)
        .subscribe((data) => {
          this.filteredCoursesList = data.content;
          this.paginatorPages = data.totalPages;
        });
    } else {
      this.resetFilteredCourses();
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
=======
  imports: [CourseMainComponent, CourseOverlayComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {}
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
