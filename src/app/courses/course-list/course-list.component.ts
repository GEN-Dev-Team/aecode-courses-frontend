import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseItemComponent } from '../course-item/course-item.component';
import { ISecondaryCourse } from '../interface/secondary-course/Secondary-Course';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { FilterIconComponent } from '../../admin-panel/icons/filter-icon/filter-icon.component';
import { CourseFilterDropdownComponent } from './course-filter-dropdown/course-filter-dropdown.component';
import { ZoomInDirective } from '../../shared/directives/animations/zoom-in.directive';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CourseItemComponent,
    LoaderComponent,
    FilterIconComponent,
    CourseFilterDropdownComponent,
    ZoomInDirective,
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  @Output() filterMode = new EventEmitter<string>();
  @Input() secondaryCourseList: ISecondaryCourse[] = [];

  showFilter: boolean = false;

  emitFilterMode(mode: string) {
    this.filterMode.emit(mode);
    this.showFilter = false;
  }
}
