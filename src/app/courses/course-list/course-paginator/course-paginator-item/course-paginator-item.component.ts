import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-paginator-item',
  standalone: true,
  imports: [],
  templateUrl: './course-paginator-item.component.html',
  styleUrl: './course-paginator-item.component.scss',
})
export class CoursePaginatorItemComponent {
  @Output() changePage = new EventEmitter<number>();
  @Input() totalPages: number = 0;
  @Input() pageNumber: number = 0;
  @Input() pageSelected: number = 0;

  sendPageNumber() {
    this.changePage.emit(this.pageNumber - 1);
  }
}
