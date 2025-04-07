import { Component, inject } from '@angular/core';
import { CourseService } from '../../../courses/services/course.service';
import { SunIconComponent } from '../../icons/sun-icon/sun-icon.component';
import { MoonIconComponent } from '../../icons/moon-icon/moon-icon.component';
import { WsspFloatingIconComponent } from '../../icons/wssp-floating-icon/wssp-floating-icon.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeFooterComponent } from '../../../home/home-footer/home-footer.component';
import { ThemeMode, ThemeService } from '../../../core/services/theme.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PaymentService } from '../../../shopping-cart/services/payment.service';
import { ContentBlockedComponent } from '../../components/content-blocked/content-blocked.component';
import { MessageBoxService } from '../../../core/services/message-box.service';

@Component({
  selector: 'app-course-overlay',
  standalone: true,
  imports: [
    SunIconComponent,
    MoonIconComponent,
    WsspFloatingIconComponent,
    HeaderComponent,
    HomeFooterComponent,
    AsyncPipe,
    ContentBlockedComponent,
  ],
  templateUrl: './course-overlay.component.html',
  styleUrl: './course-overlay.component.css',
})
export class CourseOverlayComponent {
  courseService: CourseService = inject(CourseService);
  themeService: ThemeService = inject(ThemeService);
  cartService: PaymentService = inject(PaymentService);
  messageBoxService: MessageBoxService = inject(MessageBoxService);

  wsspMessage =
    'https://api.whatsapp.com/send?phone=51900121245&text=Hola AECODE, quisiera conocer más detalles de los programas e iniciativas de colaboración que cuentan. Quiero contactar con un asesor.';

  theme: Observable<ThemeMode> = this.themeService.getMode();
  isDarkTheme!: boolean;

  showMessageModal = this.messageBoxService;
  message = this.messageBoxService;
  title = this.messageBoxService;
  isMessageTypeSuccess = this.messageBoxService;

  ngOnInit(): void {
    this.cartService.initializeShopCartList();
    this.theme.subscribe((mode) => (this.isDarkTheme = mode === 'dark'));
  }

  setThemeMode(theme: ThemeMode): void {
    this.themeService.setMode(theme);
    this.isDarkTheme = theme === 'dark';
  }
}
