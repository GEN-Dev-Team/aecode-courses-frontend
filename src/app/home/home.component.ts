import { Component, inject, OnInit } from '@angular/core';
import { SendIconComponent } from '../shared/icons/send-icon/send-icon.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { CourseListComponent } from '../courses/components/course-list/course-list.component';
import { BrowserService } from '../core/services/browser.service';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { ZoomInDirective } from '../shared/directives/animations/zoom-in.directive';
import { ChatbotIconComponent } from '../shared/components/header/icons/chatbot-icon/chatbot-icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SendIconComponent,
    ModalComponent,
    CourseListComponent,
    HomeFooterComponent,
    ZoomInDirective,
    ChatbotIconComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  browserService: BrowserService = inject(BrowserService);
  router: Router = inject(Router);

  openModal = false;

  wsspMessage =
    'https://api.whatsapp.com/send?phone=51900121245&text=Hola AECODE, quisiera conocer más detalles de los programas e iniciativas de colaboración que cuentan. Quiero contactar con un asesor.';

  textItems: string[] = [
    'Modelamiento Paramétrico',
    'Inteligencia Artificial',
    'Automatización',
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

  redirectToChat() {
    this.router.navigate(['/aecode-chat']);
  }
}
