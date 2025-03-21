import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CaretRightIconComponent } from '../icons/caret-right-icon/caret-right-icon.component';
import { CaretLeftIconComponent } from '../../shared/icons/caret-left-icon/caret-left-icon.component';
import { ICourseTag } from '../interface/CourseTag';
import { CourseTagItemComponent } from './course-tag-item/course-tag-item.component';
import { AsyncPipe } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

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

  themeService: ThemeService = inject(ThemeService);

  tagList: ICourseTag[] = [
    {
      courseTagId: 1,
      courseTagName: 'Python',
      isSelected: false,
    },
    {
      courseTagId: 2,
      courseTagName: 'Java',
      isSelected: false,
    },
    {
      courseTagId: 3,
      courseTagName: 'C#',
      isSelected: false,
    },
    {
      courseTagId: 4,
      courseTagName: 'C++',
      isSelected: false,
    },
    {
      courseTagId: 5,
      courseTagName: 'Gestión',
      isSelected: false,
    },
    {
      courseTagId: 6,
      courseTagName: 'BIM',
      isSelected: false,
    },
  ];

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
