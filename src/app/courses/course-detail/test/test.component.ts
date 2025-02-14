import { Component, inject, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AccCreatedIconComponent } from '../../../shared/icons/acc-created-icon/acc-created-icon.component';
import { ProgressSessionService } from '../../services/course-progress.service';
import { IProgressRW } from '../../interface/CourseProgress';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ButtonComponent, AccCreatedIconComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  showContentModal = false;
  @Input() ev_url: string = '';
  @Input() testId: number = -1;

  courseProgressService: ProgressSessionService = inject(
    ProgressSessionService
  );
  authService: AuthService = inject(AuthService);

  createRWProgress() {
    const rwItem: IProgressRW = {
      progressId: -1,
      userId: this.authService.getUserDetails().userId,
      workId: this.testId,
      completed: true,
    };

    this.courseProgressService.createRWProgress(rwItem).subscribe({
      next: (data) => {},
    });
  }
}
