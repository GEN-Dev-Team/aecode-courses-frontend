import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-course-paginator-item',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './course-paginator-item.component.html',
  styleUrl: './course-paginator-item.component.scss',
})
export class CoursePaginatorItemComponent {
  @Output() changePage = new EventEmitter<number>();
  @Input() totalPages: number = 0;
  @Input() pageNumber: number = 0;
  @Input() pageSelected: number = 0;
  themeService: ThemeService = inject(ThemeService);

  sendPageNumber() {
    this.changePage.emit(this.pageNumber - 1);
  }
}
