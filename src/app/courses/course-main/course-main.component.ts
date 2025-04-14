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
import { ThemeService } from '../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';
import { CourseTagListComponent } from '../course-tag-list/course-tag-list.component';
import { CourseTagService } from '../services/course-tag.service';
import { ICourseTag } from '../interface/CourseTag';

@Component({
  selector: 'app-course-main',
  standalone: true,
  imports: [
    SearchToolIconComponent,
    CourseSearchIconComponent,
    PlatformCourseListComponent,
    CourseListComponent,
    AsyncPipe,
    CourseTagListComponent,
  ],
  templateUrl: './course-main.component.html',
  styleUrl: './course-main.component.css',
})
export class CourseMainComponent implements OnInit {
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
            console.log(data);
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
            console.log(data);
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
          console.log(data);
        });
    } else if (this.filterValue === 'DATE') {
      this.secondaryCourseService
        .getSecondaryCoursesByDate(this.currentPage, this.pageSize)
        .subscribe((data) => {
          this.filteredCoursesList = data.content;
          this.paginatorPages = data.totalPages;
          console.log(data);
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
          console.log(data);
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

    if (tagIdsList.length > 0) {
      this.filteredCoursesList = [];
      this.isFilteringByMode = true;
      this.filterValue = '';

      this.secondaryCourseService
        .getSecondaryCoursesByTags(tagIdsList, this.currentPage, this.pageSize)
        .subscribe((data) => {
          this.filteredCoursesList = data.content;
          this.paginatorPages = data.totalPages;
          console.log(data);
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
