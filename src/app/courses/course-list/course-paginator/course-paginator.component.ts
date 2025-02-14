import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AngleLeftIconComponent } from './angle-left-icon/angle-left-icon.component';
import { AngleRightIconComponent } from './angle-right-icon/angle-right-icon.component';
import { CoursePaginatorItemComponent } from './course-paginator-item/course-paginator-item.component';

@Component({
  selector: 'app-course-paginator',
  standalone: true,
  imports: [
    AngleLeftIconComponent,
    AngleRightIconComponent,
    CoursePaginatorItemComponent,
  ],
  templateUrl: './course-paginator.component.html',
  styleUrl: './course-paginator.component.scss',
})
export class CoursePaginatorComponent {
  @Input() page: number = 1;
  @Input() totalPages: number = 0;
  @Output() nextPage = new EventEmitter<boolean>();

  itemsList: number[] = [];
  pageSelected: number = 1;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalPages'] && this.totalPages > 0) {
      this.itemsList = Array.from(
        { length: this.totalPages },
        (_, index) => index + 1
      );
    }
  }

  emiteChangeNextPage(nextPage: boolean) {
    if (nextPage && this.pageSelected < this.totalPages) {
      this.pageSelected = this.pageSelected + 1;
      this.nextPage.emit(nextPage);
    } else if (!nextPage && this.pageSelected > 1) {
      this.pageSelected = this.pageSelected - 1;
      this.nextPage.emit(nextPage);
    }
  }
}
