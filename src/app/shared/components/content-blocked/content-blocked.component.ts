import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CourseContentComponent } from '../../../courses/course-content/course-content.component';

@Component({
  selector: 'app-content-blocked',
  standalone: true,
  imports: [ButtonComponent, CourseContentComponent],
  templateUrl: './content-blocked.component.html',
  styleUrl: './content-blocked.component.css',
})
export class ContentBlockedComponent {
  @Input() message: string =
    'El siguiente contenido se desbloqueará próximamente.';
  @Output() isClosed = new EventEmitter<boolean>();

  showContentModal = false;

  closeModal(event: boolean) {
    this.isClosed.emit(event);
  }

  openContentModal() {
    this.showContentModal = true;
  }
}
