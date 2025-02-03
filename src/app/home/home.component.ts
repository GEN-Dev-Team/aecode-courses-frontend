import { Component, inject } from '@angular/core';
import { SendIconComponent } from '../shared/icons/send-icon/send-icon.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { CourseListComponent } from '../courses/course-list/course-list.component';
import { FormComponent } from './form/form.component';
import { BrowserService } from '../core/services/browser.service';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeHeaderComponent } from './home-header/home-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SendIconComponent,
    ModalComponent,
    CourseListComponent,
    FormComponent,
    HomeFooterComponent,
    HomeHeaderComponent,
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
    if (this.browserService.isBrowser()) {
      const messageInput = this.browserService.getElementById(
        'message-input'
      ) as HTMLInputElement;

      this.openForm = true;
      this.userMessage = messageInput.value;
    }
  }
}
