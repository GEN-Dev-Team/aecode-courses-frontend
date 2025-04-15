import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CaretRightIconComponent } from '../icons/caret-right-icon/caret-right-icon.component';
import { CaretLeftIconComponent } from '../../shared/icons/caret-left-icon/caret-left-icon.component';
import { ICourseTag } from '../interface/CourseTag';
import { CourseTagItemComponent } from './course-tag-item/course-tag-item.component';
import { AsyncPipe } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { CourseTagService } from '../services/course-tag.service';

@Component({
  selector: 'app-course-tag-list',
  standalone: true,
  imports: [
    CaretLeftIconComponent,
    CourseTagItemComponent,
    CaretRightIconComponent,
    AsyncPipe,
  ],
  templateUrl: './course-tag-list.component.html',
  styleUrl: './course-tag-list.component.scss',
})
export class CourseTagListComponent {
  @Output() tagIdsList = new EventEmitter<number[]>();
  @Input() tagList: ICourseTag[] = [];

  themeService: ThemeService = inject(ThemeService);

  tagListSelected: number[] = [];

  handleTagListSelected(tagId: number) {
    if (this.tagListSelected.includes(tagId)) {
      this.tagListSelected = this.tagListSelected.filter((t) => t !== tagId);
    } else {
      this.tagListSelected.push(tagId);
    }

    this.tagIdsList.emit(this.tagListSelected);
  }
}
