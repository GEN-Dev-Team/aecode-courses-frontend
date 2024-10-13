import { Component } from '@angular/core';
import { MainContainerComponent } from '../shared/components/main-container/main-container.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SendIconComponent } from '../shared/icons/send-icon/send-icon.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { CourseListComponent } from '../courses/course-list/course-list.component';
import { FormComponent } from './form/form.component';
import { ContentBlockedComponent } from '../shared/components/content-blocked/content-blocked.component';
import { CourseContentComponent } from '../courses/course-content/course-content.component';
import { ClassQuestionComponent } from '../courses/course-detail/class-question/class-question.component';
import { PaymentCardComponent } from '../payment/payment-card/payment-card.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    MainContainerComponent,
    SocialMediaComponent,
    SendIconComponent,
    ModalComponent,
    CourseListComponent,
    FormComponent,
    ContentBlockedComponent,
    CourseContentComponent,
    ClassQuestionComponent,
    PaymentCardComponent,
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent {
  openModal = false;
  openForm = false;
  userMessage = '';

  sendMessage() {
    const messageInput = document.getElementById(
      'message-input'
    ) as HTMLInputElement;

    this.openForm = true;
    this.userMessage = messageInput.value;
  }
}
