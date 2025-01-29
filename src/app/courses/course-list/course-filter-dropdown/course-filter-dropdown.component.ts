import { Component, EventEmitter, Output } from '@angular/core';
import { ComnigSoonCourseIconComponent } from '../../../shared/icons/comnig-soon-course-icon/comnig-soon-course-icon.component';
import { SyncCourseIconComponent } from '../../../shared/icons/sync-course-icon/sync-course-icon.component';
import { AsyncCourseIconComponent } from '../../../shared/icons/async-course-icon/async-course-icon.component';
import { DropdownDropdownIconComponent } from '../../../shared/icons/all-dropdown-icon/all-dropdown-icon.component';

@Component({
  selector: 'app-course-filter-dropdown',
  standalone: true,
  imports: [
    ComnigSoonCourseIconComponent,
    SyncCourseIconComponent,
    AsyncCourseIconComponent,
    DropdownDropdownIconComponent,
  ],
  templateUrl: './course-filter-dropdown.component.html',
  styleUrl: './course-filter-dropdown.component.css',
})
export class CourseFilterDropdownComponent {
  @Output() filterMode = new EventEmitter<string>();

  emitFilterValue(value: string) {
    this.filterMode.emit(value);
  }
}
