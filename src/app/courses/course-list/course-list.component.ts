import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseItemComponent } from '../course-item/course-item.component';
import { ISecondaryCourse } from '../interface/secondary-course/Secondary-Course';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { FilterIconComponent } from '../../admin-panel/icons/filter-icon/filter-icon.component';
import { CourseFilterDropdownComponent } from './course-filter-dropdown/course-filter-dropdown.component';
import { ZoomInDirective } from '../../shared/directives/animations/zoom-in.directive';
import { CoursePaginatorComponent } from './course-paginator/course-paginator.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CourseItemComponent,
    LoaderComponent,
    FilterIconComponent,
    CourseFilterDropdownComponent,
    ZoomInDirective,
    CoursePaginatorComponent,
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  @Output() filterMode = new EventEmitter<string>();
  @Output() nextPage = new EventEmitter<boolean>();
  @Output() changePage = new EventEmitter<number>();
  @Input() secondaryCourseList: ISecondaryCourse[] = [];
  @Input() paginatorPages: number = 0;
  @Input() showPaginator: boolean = true;

  showFilter: boolean = false;

  emitFilterMode(mode: string) {
    this.filterMode.emit(mode);
    this.showFilter = false;
  }

  emiteChangeNextPage(nextPage: boolean) {
    this.nextPage.emit(nextPage);
  }

  emiteChangePage(page: number) {
    this.changePage.emit(page);
  }
}
