import { Component, inject } from '@angular/core';
import { CourseService } from '../../../courses/services/course.service';
import { SunIconComponent } from '../../icons/sun-icon/sun-icon.component';
import { MoonIconComponent } from '../../icons/moon-icon/moon-icon.component';
import { WsspFloatingIconComponent } from '../../icons/wssp-floating-icon/wssp-floating-icon.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-course-overlay',
  standalone: true,
  imports: [
    SunIconComponent,
    MoonIconComponent,
    WsspFloatingIconComponent,
    HeaderComponent,
  ],
  templateUrl: './course-overlay.component.html',
  styleUrl: './course-overlay.component.css',
})
export class CourseOverlayComponent {
  courseService: CourseService = inject(CourseService);

  wsspMessage =
    'https://api.whatsapp.com/send?phone=51900121245&text=Hola AECODE, quisiera conocer más detalles de los programas e iniciativas de colaboración que cuentan. Quiero contactar con un asesor.';

  isDarkTheme: boolean = false;
}
