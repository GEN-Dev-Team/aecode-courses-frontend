import { Component, inject, Input } from '@angular/core';
import { ArrowRightComponent } from '../../../../not-available-mobile/icons/arrow-right/arrow-right.component';
import { InProgressIconComponent } from '../../../icons/in-progress-icon/in-progress-icon.component';
import { Router } from '@angular/router';
import { MessageBoxService } from '../../../../core/services/message-box.service';

@Component({
  selector: 'app-my-course-card',
  standalone: true,
  imports: [ArrowRightComponent, InProgressIconComponent],
  templateUrl: './my-course-card.component.html',
  styleUrl: './my-course-card.component.scss',
})
export class MyCourseCardComponent {
  @Input() course: any;

  router = inject(Router);
  messageBoxService = inject(MessageBoxService);

  goToCourse() {
    if (this.course.seccourseId === 101 || this.course.seccourseId === 100) {
      this.router.navigate([
        `/training/my-courses/${this.course.seccourseId}/${this.course.urlname}`,
      ]);
    } else {
      this.messageBoxService.showMessageBox(
        'Acceso restringido',
        'Se habilitará el acceso en 48 horas',
        false
      );
    }
  }
}
