import { Component, inject, OnInit } from '@angular/core';
import { SendIconComponent } from '../shared/icons/send-icon/send-icon.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
<<<<<<< HEAD
import { CourseListComponent } from '../courses/components/course-list/course-list.component';
import { BrowserService } from '../core/services/browser.service';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { ZoomInDirective } from '../shared/directives/animations/zoom-in.directive';
import { ChatbotIconComponent } from '../shared/components/header/icons/chatbot-icon/chatbot-icon.component';
import { Router } from '@angular/router';
=======
import { CourseListComponent } from '../courses/course-list/course-list.component';
import { FormComponent } from './form/form.component';
import { BrowserService } from '../core/services/browser.service';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { ZoomInDirective } from '../shared/directives/animations/zoom-in.directive';
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SendIconComponent,
    ModalComponent,
    CourseListComponent,
<<<<<<< HEAD
    HomeFooterComponent,
    ZoomInDirective,
    ChatbotIconComponent,
=======
    FormComponent,
    HomeFooterComponent,
    ZoomInDirective,
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  browserService: BrowserService = inject(BrowserService);
<<<<<<< HEAD
  router: Router = inject(Router);

  openModal = false;
=======

  openModal = false;
  openForm = false;
  userMessage = '';
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74

  wsspMessage =
    'https://api.whatsapp.com/send?phone=51900121245&text=Hola AECODE, quisiera conocer más detalles de los programas e iniciativas de colaboración que cuentan. Quiero contactar con un asesor.';

  textItems: string[] = [
    'Modelamiento Paramétrico',
    'Inteligencia Artificial',
<<<<<<< HEAD
    'Automatización',
=======
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
    'Diseño Generativo',
    'Programación con Python',
  ];

  currentText = this.textItems[0];
  index = 0;
  animate = false;

  intervalId: any;

  ngOnInit() {
    if (this.browserService.isBrowser()) {
      this.intervalId = setInterval(() => {
        this.animate = true;

        this.index = (this.index + 1) % this.textItems.length;
        this.currentText = this.textItems[this.index];

        setTimeout(() => {
          this.animate = false;
        }, 2000);
      }, 3000);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

<<<<<<< HEAD
  redirectToChat() {
    this.router.navigate(['/aecode-chat']);
=======
  sendMessage() {
    if (this.browserService.isBrowser()) {
      const messageInput = this.browserService.getElementById(
        'message-input'
      ) as HTMLInputElement;

      this.openForm = true;
      this.userMessage = messageInput.value;
    }
>>>>>>> 6a701c4410546401dfde04eeed2211f8cd751a74
  }
}
