import { Component, inject } from '@angular/core';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SendIconComponent } from '../shared/icons/send-icon/send-icon.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { CourseListComponent } from '../courses/course-list/course-list.component';
import { FormComponent } from './form/form.component';
import { BrowserService } from '../core/services/browser.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SocialMediaComponent,
    SendIconComponent,
    ModalComponent,
    CourseListComponent,
    FormComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  browserService: BrowserService = inject(BrowserService);

  openModal = false;
  openForm = false;
  userMessage = '';

  sendMessage() {
    const messageInput = this.browserService.getElementById(
      'message-input'
    ) as HTMLInputElement;

    this.openForm = true;
    this.userMessage = messageInput.value;
  }
}
