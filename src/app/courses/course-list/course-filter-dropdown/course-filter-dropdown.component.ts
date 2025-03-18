import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ComnigSoonCourseIconComponent } from '../../../shared/icons/comnig-soon-course-icon/comnig-soon-course-icon.component';
import { SyncCourseIconComponent } from '../../../shared/icons/sync-course-icon/sync-course-icon.component';
import { AsyncCourseIconComponent } from '../../../shared/icons/async-course-icon/async-course-icon.component';
import { DropdownDropdownIconComponent } from '../../../shared/icons/all-dropdown-icon/all-dropdown-icon.component';
import { AsyncPipe } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';
import { DateIconComponent } from '../../icons/date-icon/date-icon.component';

@Component({
  selector: 'app-course-filter-dropdown',
  standalone: true,
  imports: [
    ComnigSoonCourseIconComponent,
    SyncCourseIconComponent,
    AsyncCourseIconComponent,
    DropdownDropdownIconComponent,
    AsyncPipe,
    DateIconComponent,
  ],
  templateUrl: './course-filter-dropdown.component.html',
  styleUrl: './course-filter-dropdown.component.css',
})
export class CourseFilterDropdownComponent {
  @Output() filterMode = new EventEmitter<string>();

  themeService: ThemeService = inject(ThemeService);

  emitFilterValue(value: string) {
    this.filterMode.emit(value);
  }
}
