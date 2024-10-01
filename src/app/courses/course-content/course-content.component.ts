import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SquareIconComponent } from '../../shared/icons/square-icon/square-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-content',
  standalone: true,
  imports: [ButtonComponent, SquareIconComponent, RouterLink],
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.css',
})
export class CourseContentComponent {
  @Output() isClosed = new EventEmitter<boolean>();

  closeModal() {
    this.isClosed.emit(false);
  }
}
