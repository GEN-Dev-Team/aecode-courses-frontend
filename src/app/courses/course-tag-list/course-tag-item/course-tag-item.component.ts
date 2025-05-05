import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { defaultCourseTag, ICourseTag } from '../../interface/CourseTag';
import { ThemeService } from '../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-course-tag-item',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './course-tag-item.component.html',
  styleUrl: './course-tag-item.component.scss',
})
export class CourseTagItemComponent {
  @Input() tagItem: ICourseTag = defaultCourseTag;
  @Output() tagSelected = new EventEmitter<ICourseTag>();

  themeService: ThemeService = inject(ThemeService);

  selectTag() {
    this.tagItem.isSelected = !this.tagItem.isSelected;
    this.tagSelected.emit(this.tagItem);
  }
}
