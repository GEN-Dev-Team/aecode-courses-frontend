import { Component, EventEmitter, Output } from '@angular/core';
import { SquareIconComponent } from '../../shared/icons/square-icon/square-icon.component';
import { RouterLink } from '@angular/router';
import { SeparatorIconComponent } from '../../shared/icons/separator-icon/separator-icon.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [SquareIconComponent, RouterLink, SeparatorIconComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  @Output() openModal = new EventEmitter<boolean>();

  closeModal() {
    this.openModal.emit(false);
  }
}
